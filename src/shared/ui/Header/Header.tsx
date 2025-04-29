import { NavLinkItem} from "../NavLinkItem/NavLinkItem";
import styles from './Header.module.scss';
import {Button} from "../Button";
import {Link} from "react-router-dom";
import {LogoIcon} from "../../../assets/SVG/LogoIcon";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" aria-label="На главную" className="logo">
                    <LogoIcon />
                </Link>
                <nav className={styles.nav}>
                    <NavLinkItem to="/">Мои расходы</NavLinkItem>
                    <NavLinkItem to="/analytics">Анализ расходов</NavLinkItem>
                </nav>
                <Button variant={'secondary'}>Выйти</Button>
            </div>
        </header>
    );
};
