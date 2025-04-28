import { NavLink } from 'react-router-dom';
import styles from './NavLinkItem.module.scss';
import { ReactNode } from 'react';

interface NavLinkItemProps {
    to: string;
    children: ReactNode;
}

export const NavLinkItem = ({ to, children }: NavLinkItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? styles.active : styles.link}
        >
            {children}
        </NavLink>
    );
};
