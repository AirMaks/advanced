import { Link } from 'react-router-dom';
import "./styles/index.scss";
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О приложении</Link>
            <AppRouter />
        </div>
    );
};

export default App;