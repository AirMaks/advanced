import "./styles/index.scss";
import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar toggleTheme={toggleTheme} />
            <AppRouter />
        </div>
    );
};

export default App;