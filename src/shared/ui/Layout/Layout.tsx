import {Outlet, useLocation} from 'react-router-dom';
import { Header} from "../Header";
import { AddExpenseForm} from "../../../features/addExpense/ui/AddExpenseForm";

import styles from './Layout.module.scss';

const pageTitles: Record<string, string> = {
    '/': 'Мои расходы',
    '/analytics': 'Анализ расходов',
};

export const Layout = () => {

    const location = useLocation();
    const pageTitle = pageTitles[location.pathname] || 'Страница';

    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <h2 className={styles.title}>{pageTitle}</h2>
                <div className={styles.contentContainer}>
                    <div className={styles.pageContent}>
                        <Outlet />
                    </div>
                    <AddExpenseForm />
                </div>
            </main>
        </div>
    );
};
