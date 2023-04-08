import { cn } from "shared/lib/classNames/classNames";
import { useCallback } from "react";
import cls from "./Navbar.module.scss";
import BurgerIcon from "shared/assets/icons/navbar/burger.svg";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import Logout from "shared/assets/icons/navbar/logout.svg";

interface NavbarProps {
    className?: string;
    onToggle?: () => void;
    collapsed?: boolean;
}

export const Navbar = ({ className, onToggle, collapsed }: NavbarProps) => {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={cn(cls.Navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div data-testid="sidebar-toggle" onClick={onToggle}>
                <BurgerIcon className={cls.Burger} />
            </div>
            <Logout width={24} height={24} className={cls.logoutBtn} onClick={onLogout} />
        </div>
    );
};
