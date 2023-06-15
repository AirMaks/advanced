import { cn } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "shared/assets/icons/sidebar/logo-long.svg";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { memo, useMemo } from "react";

interface SidebarProps {
    className?: string;
    collapsed?: boolean;
}

export const Sidebar = memo(({ className, collapsed }: SidebarProps) => {
    const itemsList = useMemo(() => SidebarItemsList.map(item => <SidebarItem item={item} key={item.path} />), []);
    return (
        <div data-testid="sidebar" className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <NavLink to={"/"} className={cn(cls.Logo, {}, [className])}>
                <Logo />
            </NavLink>
            <div className={cls.items_container}>
                <div className={cls.items}>{itemsList}</div>
            </div>
        </div>
    );
});
