import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Category } from "../../../shared/types/category";

interface Expense {
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

const mockExpenses: Expense[] = [
    { id: '1', title: 'Пятерочка', category: 'food', date: '2024-07-03', amount: 3500 },
    { id: '2', title: 'Яндекс Такси', category: 'transport', date: '2024-07-03', amount: 730 },
    { id: '3', title: 'Аптека Вита', category: 'other', date: '2024-07-03', amount: 1200 },
    { id: '4', title: 'Бургер Кинг', category: 'food', date: '2024-07-03', amount: 950 },
    { id: '5', title: 'Деливери', category: 'food', date: '2024-07-02', amount: 1320 },
    { id: '6', title: 'Кофейня №1', category: 'food', date: '2024-07-02', amount: 400 },
    { id: '7', title: 'Бильярд', category: 'entertainment', date: '2024-06-29', amount: 600 },
    { id: '8', title: 'Перекресток', category: 'food', date: '2024-06-29', amount: 2360 },
    { id: '9', title: 'Лукойл', category: 'transport', date: '2024-06-29', amount: 1000 },
    { id: '10', title: 'Летуаль', category: 'other', date: '2024-06-29', amount: 4300 },
    { id: '11', title: 'Яндекс Такси', category: 'transport', date: '2024-06-28', amount: 320 },
    { id: '12', title: 'Перекресток', category: 'food', date: '2024-06-28', amount: 1360 },
    { id: '13', title: 'Деливери', category: 'food', date: '2024-06-28', amount: 2320 },
    { id: '14', title: 'Вкусвилл', category: 'food', date: '2024-06-27', amount: 1220 },
    { id: '15', title: 'Кофейня №1', category: 'education', date: '2024-06-27', amount: 920 },
    { id: '16', title: 'Вкусвилл', category: 'food', date: '2024-06-26', amount: 840 },
    { id: '17', title: 'Кофейня №1', category: 'food', date: '2024-06-26', amount: 920 },
];

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
