import { cn } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
    toggleTheme: () => void;
}
export const Navbar = ({ className }: NavbarProps) => {
    return <div className={cn(cls.Navbar, {}, [className])}></div>;
};
