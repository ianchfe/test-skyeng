import { FC, useState, useRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string | number;
}

export const Input: FC<InputProps> = ({ label, id, placeholder, value, type, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleContainerClick = () => {
        inputRef.current?.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        if (type === 'number' && newValue === '0') {
            newValue = ''; // Сбрасываем на пустое значение
        }

        if (props.onChange) {
            props.onChange({
                ...e,
                target: { ...e.target, value: newValue }
            });
        }
    };

    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <div
                className={`${styles.customInput} ${isFocused ? styles.focused : ''} ${value ? styles.filled : ''}`}
                onClick={handleContainerClick}
            >
                {!value && placeholder && (
                    <span className={styles.placeholder}>{placeholder}</span>
                )}
                <span className={styles.value}>{value !== 0 ? value : ''}</span> {/* Если 0, не отображаем */}
                <input
                    id={id}
                    ref={inputRef}
                    className={styles.hiddenInput}
                    value={value === 0 ? '' : value || ''}
                    type={type}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleChange}
                    {...props}
                />
            </div>
        </div>
    );
};
