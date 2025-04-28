import React from 'react';
import {useExpenses} from "../../../entities/expense/model/ExprenseContext";
import {ExpenseTable} from "../../../shared/ui/ExpenseTable/ExpenseTable";

export const MainPage = () => {
    const {expenses, removeExpense} = useExpenses()
    return (
            <ExpenseTable expenses={expenses}/>
    );
};
