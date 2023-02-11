import "./styles/index.scss";
import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from "widgets/Sidebar/ui";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Navbar toggleTheme={toggleTheme} />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;