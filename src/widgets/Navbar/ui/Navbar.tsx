import { cn } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";


interface NavbarProps {
    className?: string,
    toggleTheme: () => void
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <AppLink to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink to="/about">О приложении</AppLink>
        </div>
    );
};


