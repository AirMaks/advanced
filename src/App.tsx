import { Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames as cn } from './helpers/classnames';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О приложении</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                            <Route path="/about" element={<AboutPageAsync />}/>
                            <Route path="/" element={<MainPageAsync />}/>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;