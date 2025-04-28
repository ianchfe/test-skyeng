import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'icon' | 'ghost';
    children: ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(styles.button, styles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};
