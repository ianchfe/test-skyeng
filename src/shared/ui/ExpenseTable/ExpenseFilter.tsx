import { FC } from 'react';
import styles from './ExpenseTable.module.scss'
import {Button} from "../Button";
import {useExpenses} from "../../../entities/expense/model/ExprenseContext";
import {Polygon} from "../../../assets/SVG/Polygon";

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
        return  <div className={`${styles.arrow} ${sortDirection === 'asc' ? styles.rotated : ''}`}><Polygon/></div>;
    };

    return (
        <div className={styles.sortFilters}>
            <Button
                type="button"
                variant={'ghost'}
                style={sortField === 'category'? {color: 'var(--color-primary)'}: {color: 'var(--color-text)'}}
                onClick={() => handleSortClick('category')}
            >
                <div className={styles.buttonText}>
                    <span>Фильтровать по категории</span> {renderArrow('category')}
                </div>
            </Button>
            <Button
                type="button"
                variant={'ghost'}
                style={sortField === 'category'? {color: 'var(--color-primary)'}: {color: 'var(--color-text)'}}
                onClick={() => handleSortClick('date')}
            >
                <div className={styles.buttonText}>
                    <span>Фильтровать по дату</span> {renderArrow('date')}
                </div>
            </Button>
        </div>
    );
};
