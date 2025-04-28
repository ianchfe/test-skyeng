import {AppRouter} from "./app/router/AppRouter";
import {ExpensesProvider} from "./entities/expense/model/ExprenseContext";

const App = () => {
    return (
            <ExpensesProvider>
                <AppRouter />
            </ExpensesProvider>
    );
};

export default App;
