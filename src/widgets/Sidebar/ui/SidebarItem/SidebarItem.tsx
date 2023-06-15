import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
    item: SidebarItemType;
}
export const SidebarItem = ({ item }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={cls.item}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};
