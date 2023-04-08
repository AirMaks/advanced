import { cn } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import TasksIcon from "shared/assets/icons/sidebar/tasks.svg";
import NotificationsIcon from "shared/assets/icons/sidebar/notification.svg";
import WheelIcon from "shared/assets/icons/sidebar/wheel.svg";
import TruckIcon from "shared/assets/icons/sidebar/truck.svg";
import RouteIcon from "shared/assets/icons/sidebar/route.svg";
import TrailerIcon from "shared/assets/icons/sidebar/trailer.svg";
import CalendarIcon from "shared/assets/icons/sidebar/calendar.svg";
import ShiftIcon from "shared/assets/icons/sidebar/shift.svg";
import WorkScheduleIcon from "shared/assets/icons/sidebar/work-schedule.svg";
import UserIcon from "shared/assets/icons/sidebar/user.svg";
import TGIcon from "shared/assets/icons/sidebar/tg.svg";
import ServiceWorkIcon from "shared/assets/icons/sidebar/service-work.svg";
import DriverBidIcon from "shared/assets/icons/sidebar/driver-bid.svg";
import MapObjectIcon from "shared/assets/icons/sidebar/map-object.svg";
import RoleIcon from "shared/assets/icons/sidebar/role.svg";
import ReportIcon from "shared/assets/icons/sidebar/report.svg";
import cls from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "shared/assets/icons/sidebar/logo-long.svg";

interface SidebarProps {
    className?: string;
    collapsed?: boolean;
}

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
    const { t } = useTranslation();

    return (
        <div data-testid="sidebar" className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <NavLink to={"/"} className={cn(cls.Logo, {}, [className])}>
                <Logo />
            </NavLink>
            <div className={cls.items_container}>
                <div className={cls.items}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.notifications} className={cls.item}>
                        <NotificationsIcon className={cls.icon} />
                        <span className={cls.link}>{t("Уведомления")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.tasks} className={cls.item}>
                        <TasksIcon className={cls.icon} />
                        <span className={cls.link}>{t("Задачи")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.drivers} className={cls.item}>
                        <WheelIcon className={cls.icon} />
                        <span className={cls.link}>{t("Водители")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.trucks} className={cls.item}>
                        <TruckIcon className={cls.icon} />
                        <span className={cls.link}>{t("Грузовики")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.trailers} className={cls.item}>
                        <TrailerIcon className={cls.icon} />
                        <span className={cls.link}>{t("Прицепы")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["driver-shifts"]} className={cls.item}>
                        <RouteIcon className={cls.icon} />
                        <span className={cls.link}>{t("Выпуск в рейс")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.letouts} className={cls.item}>
                        <CalendarIcon className={cls.icon} />
                        <span className={cls.link}>{t("Календарь ПС")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.shifts} className={cls.item}>
                        <ShiftIcon className={cls.icon} />
                        <span className={cls.link}>{t("Смены")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["work-schedules"]} className={cls.item}>
                        <WorkScheduleIcon className={cls.icon} />
                        <span className={cls.link}>{t("График работы")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.users} className={cls.item}>
                        <UserIcon className={cls.icon} />
                        <span className={cls.link}>{t("Пользователи")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["transport-groups"]} className={cls.item}>
                        <TGIcon className={cls.icon} />
                        <span className={cls.link}>{t("Колонны")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["service-works"]} className={cls.item}>
                        <ServiceWorkIcon className={cls.icon} />
                        <span className={cls.link}>{t("Сервисные работы")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["driver-bids"]} className={cls.item}>
                        <DriverBidIcon className={cls.icon} />
                        <span className={cls.link}>{t("Заявки от водителей")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath["map-objects"]} className={cls.item}>
                        <MapObjectIcon className={cls.icon} />
                        <span className={cls.link}>{t("Объекты карты")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.roles} className={cls.item}>
                        <RoleIcon className={cls.icon} />
                        <span className={cls.link}>{t("Управление ролями")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.reports} className={cls.item}>
                        <ReportIcon className={cls.icon} />
                        <span className={cls.link}>{t("Отчёты")}</span>
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
