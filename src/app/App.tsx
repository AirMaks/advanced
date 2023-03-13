import { Suspense, useState } from "react";
import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Footer } from "widgets/Footer";

function App() {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    return (
        <div className={cn("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar onToggle={onToggle} collapsed={collapsed} />
                <Sidebar collapsed={collapsed} />
                <div className={cn("content-page", { collapsed }, [])}>
                    <AppRouter />
                </div>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
