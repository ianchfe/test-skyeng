import styles from './RadioButton.module.scss';

interface RadioButtonProps {
    label: string;
    icon: React.ReactNode;
    value: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

export const RadioButton = ({ label, icon, value, selectedValue, onChange }: RadioButtonProps) => {
    const isSelected = value === selectedValue;

    return (
        <button
            type="button"
            className={`${styles.radioButton} ${isSelected ? styles.selected : ''}`}
            onClick={() => onChange(value)}
        >
            <div className={styles.icon}>{icon}</div>
            <span className={styles.label}>{label}</span>
        </button>
    );
};
