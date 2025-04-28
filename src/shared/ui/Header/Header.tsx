import { NavLinkItem} from "../NavLinkItem/NavLinkItem";
import styles from './Header.module.scss';
import {Button} from "../Button";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Skypro.Wallet</div>
                <nav className={styles.nav}>
                    <NavLinkItem to="/">Мои расходы</NavLinkItem>
                    <NavLinkItem to="/analytics">Аналитика</NavLinkItem>
                </nav>
                <Button variant={'secondary'}>Выйти</Button>
            </div>
        </header>
    );
};
