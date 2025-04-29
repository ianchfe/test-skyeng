import React, { useState } from 'react';
import {Button} from "../../../shared/ui/Button";
import {Input} from "../../../shared/ui/Input/Input";
import styles from './AddExpenseForm.module.scss'
import {useExpenses} from "../../../entities/expense/model/ExprenseContext";
import {RadioButton} from "../../../shared/ui/RadioButton/RadioButton";
import {RadioGroup} from "./RadioGroup";
import {DateInput} from "../../../shared/ui/DateInput/DateInput";

export const AddExpenseForm = () => {
    const { addExpense } = useExpenses()
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title && amount && category && date) {
            const newExpense = {
                id: Date.now(),
                title,
                amount,
                category,
                date,
            };

            addExpense(newExpense);
            setTitle('');
            setAmount(0);
            setCategory('');
            setDate('');
        }
    };

    return (
        <aside className={styles.formContainer}>
            <h3 >Новый расход</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    label={'Описание'}
                    type="text"
                    value={title}
                    placeholder={'Введите описание'}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <RadioGroup category={category} setCategory={setCategory}/>

                <DateInput
                    label={'Дата'}
                    placeholder={"введите дату"}
                    type="date"
                    value={date}
                    onChange={setDate}
                />

                <Input
                    label={'Сумма'}
                    placeholder={"Введите сумму"}
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <Button variant={'primary'} type="submit">Добавить новый расход</Button>
            </form>
        </aside>
    );
};
