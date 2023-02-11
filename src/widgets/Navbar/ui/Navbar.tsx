import { cn } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
    toggleTheme: () => void;
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <AppLink to="/" className={cls.mainLink}>
                Главная
            </AppLink>
            <AppLink to="/about">О приложении</AppLink>
        </div>
    );
};
