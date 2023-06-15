import { cn } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import cls from "./Navbar.module.scss";
import BurgerIcon from "shared/assets/icons/navbar/burger.svg";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import LogoutIcon from "shared/assets/icons/navbar/logout.svg";
import ProfileIcon from "shared/assets/icons/navbar/profile.svg";
import { NavLink } from "react-router-dom";

interface NavbarProps {
    className?: string;
    onToggle?: () => void;
    collapsed?: boolean;
}

export const Navbar = memo(({ className, onToggle, collapsed }: NavbarProps) => {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={cn(cls.Navbar, { [cls.collapsed]: collapsed }, [className])}>
            <div data-testid="sidebar-toggle" onClick={onToggle}>
                <BurgerIcon className={cls.Burger} />
            </div>
            <NavLink to={"/profile"} className={cls.profileLink}>
                <ProfileIcon width={20} height={20} />
                <div>{"mainModule.ru"}</div>
            </NavLink>
            <LogoutIcon width={24} height={24} className={cls.logoutBtn} onClick={onLogout} />
        </div>
    );
});
