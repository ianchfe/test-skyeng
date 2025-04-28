import { FC, useState, useEffect } from 'react';
import styles from './DateInput.module.scss';

interface DateInputProps {
    label?: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string
}

export const DateInput: FC<DateInputProps> = ({ label, id, value, onChange, placeholder }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        newValue = newValue.replace(/[^\d]/g, '');
        if (newValue.length > 2) newValue = newValue.slice(0, 2) + '.' + newValue.slice(2);
        if (newValue.length > 5) newValue = newValue.slice(0, 5) + '.' + newValue.slice(5, 9);

        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={id}
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={handleInputChange}
                maxLength={10}
                placeholder={placeholder}
            />
        </div>
    );
};
