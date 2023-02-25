import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = () => setIsOpen(false);
    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar toggleTheme={toggleTheme} />
                <button onClick={() => setIsOpen(true)}>Toggle</button>
                <Modal isOpen={isOpen} onClose={closeHandler} />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
