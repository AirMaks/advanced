import "./styles/index.scss";
import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { Suspense } from "react";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar toggleTheme={toggleTheme} />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
