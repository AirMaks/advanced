import { cn } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { NavLink, LinkProps } from "react-router-dom";
import { ReactNode, memo } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}
export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, theme, ...otherProps } = props;
    return (
        <NavLink to={to} {...otherProps} className={({ isActive }) => cn(cls.AppLink, { [cls.active]: isActive }, [className, cls[theme]])}>
            {children}
        </NavLink>
    );
});
