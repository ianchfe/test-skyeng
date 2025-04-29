import {AppRouter} from "./app/router/AppRouter";
import {ExpensesProvider} from "./entities/expense/model/ExprenseContext";

const App = () => {
    return (
            <ExpensesProvider>
                <h1>Учёт расходов</h1>
                <AppRouter />
            </ExpensesProvider>
    );
};

export default App;
