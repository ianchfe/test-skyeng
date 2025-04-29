import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Category } from "../../../shared/types/category";
import {mockExpenses} from "../../../shared/mocks/expenses";

export interface Expense {
    id: string;
    title: string;
    amount: number;
    category: Category;
    date: string;
}

type SortField = 'category' | 'date' | null;
type SortDirection = 'asc' | 'desc' | null;

interface ExpensesContextProps {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    removeExpense: (id: string) => void;
    sortField: SortField;
    sortDirection: SortDirection;
    setSort: (field: SortField, direction: SortDirection) => void;
}

const ExpensesContext = createContext<ExpensesContextProps | null>(null);

export const ExpensesProvider = ({ children }: { children: React.ReactNode }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [sortField, setSortField] = useState<SortField>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(null);

    useEffect(() => {
        // Эмуляция запроса
        setTimeout(() => {
            setExpenses(mockExpenses);
        }, 500);
    }, []);

    const setSort = (field: SortField, direction: SortDirection) => {
        setSortField(field);
        setSortDirection(direction);
    };

    const sortedExpenses = useMemo(() => {
        if (!sortField || !sortDirection) {
            return expenses;
        }

        const sorted = [...expenses].sort((a, b) => {
            if (sortField === 'category') {
                if (sortDirection === 'asc') {
                    return a.category.localeCompare(b.category);
                } else {
                    return b.category.localeCompare(a.category);
                }
            }
            if (sortField === 'date') {
                if (sortDirection === 'asc') {
                    return a.date.localeCompare(b.date);
                } else {
                    return b.date.localeCompare(a.date);
                }
            }
            return 0;
        });

        return sorted;
    }, [expenses, sortField, sortDirection]);

    const addExpense = (expense: Expense) => {
        setExpenses((prev) => [expense, ...prev]);
    };

    const removeExpense = (id: string) => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    };

    return (
        <ExpensesContext.Provider
            value={{
                expenses: sortedExpenses,
                addExpense,
                removeExpense,
                sortField,
                sortDirection,
                setSort,
            }}
        >
            {children}
        </ExpensesContext.Provider>
    );
};

export const useExpenses = () => {
    const context = useContext(ExpensesContext);
    if (!context) {
        throw new Error('useExpenses должен использоваться внутри ExpensesProvider');
    }
    return context;
};
