import { Suspense, useEffect, useState } from "react";
import { cn } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Footer } from "widgets/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "features/AuthByUsername/ui/LoginForm/LoginForm";
import { getUserAuthData, userActions } from "entities/User";

function App() {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    if (!localStorage.getItem("token") && !authData) {
        return <LoginForm />;
    }
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
