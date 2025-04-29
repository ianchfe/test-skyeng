import styles from './ExpenseTable.module.scss';
import {Category} from "../../types/category";
import {categoryNames} from "../../consts";
import {Button} from "../Button";
import {Change} from "../../../assets/SVG/Change";
import {Food} from "../../../assets/SVG/Food";
import {ExpenseFilters} from "./ExpenseFilter";
import {useExpenses} from "../../../entities/expense/model/ExprenseContext";

interface Expense {
    id: string;
    title: string;
    amount: number;
    category: Category;
    date: string;
}

interface ExpenseTableProps {
    expenses: Expense[];
}

export const ExpenseTable = ({ expenses }: ExpenseTableProps) => {
    const {removeExpense} = useExpenses()

    if (expenses.length === 0) {
        return <p className={styles.empty}>Расходов пока нет</p>;
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.headerContainer}>
                <h3>Таблица расходов</h3>
                <ExpenseFilters/>
            </div>
            <div className={styles.table}>
                <div className={styles.rowHeader}>
                    <div>Название</div>
                    <div>Категория</div>
                    <div>Дата</div>
                    <div>Сумма</div>
                    <div></div>
                </div>

                <div className={styles.container}>
                {expenses.map((expense) => (
                    <div className={styles.row} key={expense.id}>
                        <div>{expense.title}</div>
                        <div>{categoryNames[expense.category]}</div>
                        <div>{expense.date}</div>
                        <div>{expense.amount} ₽</div>
                        <div className={styles.buttonsContainer}>
                            <Button variant={'icon'} style={{color: '#999'}}><Change/></Button>
                            <Button variant={'icon'} style={{color: '#999'}} onClick={() => removeExpense(expense?.id)}><Food/></Button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};
