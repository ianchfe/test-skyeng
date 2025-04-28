import { FC } from 'react';
import styles from './ExpenseTable.module.scss'
import {Button} from "../Button";
import {useExpenses} from "../../../entities/expense/model/ExprenseContext";

export const ExpenseFilters: FC = () => {
    const { sortField, sortDirection, setSort } = useExpenses();

    const handleSortClick = (field: 'category' | 'date') => {
        if (sortField !== field) {
            setSort(field, 'asc');
        } else if (sortDirection === 'asc') {
            setSort(field, 'desc');
        } else {
            setSort(null, null);
        }
    };

    const renderArrow = (field: 'category' | 'date') => {
        if (sortField !== field || !sortDirection) return null;
        return sortDirection === 'asc' ? '↓' : '↑';
    };

    return (
        <div className={styles.sortFilters}>
            <Button
                type="button"
                variant={'ghost'}
                className={`${styles.button} ${sortField === 'category' ? styles.active : ''}`}
                onClick={() => handleSortClick('category')}
            >
                Фильтровать по категории {renderArrow('category')}
            </Button>
            <Button
                type="button"
                variant={'ghost'}
                className={`${styles.button} ${sortField === 'date' ? styles.active : ''}`}
                onClick={() => handleSortClick('date')}
            >
                Фильтровать по дату {renderArrow('date')}
            </Button>
        </div>
    );
};
