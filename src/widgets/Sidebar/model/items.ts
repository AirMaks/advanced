import { SVGProps, VFC } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import NotificationsIcon from "shared/assets/icons/sidebar/notification.svg";
import TasksIcon from "shared/assets/icons/sidebar/tasks.svg";
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
export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}
export const SidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.notifications, text: "Уведомления", Icon: NotificationsIcon },
    { path: RoutePath.tasks, text: "Задачи", Icon: TasksIcon },
    { path: RoutePath.drivers, text: "Водители", Icon: WheelIcon },
    { path: RoutePath.trucks, text: "Грузовики", Icon: TruckIcon },
    { path: RoutePath.trailers, text: "Прицепы", Icon: TrailerIcon },
    { path: RoutePath["driver-shifts"], text: "Выпуск в рейс", Icon: RouteIcon },
    { path: RoutePath.letouts, text: "Календарь ПС", Icon: CalendarIcon },
    { path: RoutePath.shifts, text: "Смены", Icon: ShiftIcon },
    { path: RoutePath["work-schedules"], text: "График работы", Icon: WorkScheduleIcon },
    { path: RoutePath.users, text: "Пользователи", Icon: UserIcon },
    { path: RoutePath["transport-groups"], text: "Колонны", Icon: TGIcon },
    { path: RoutePath["service-works"], text: "Сервисные работы", Icon: ServiceWorkIcon },
    { path: RoutePath["driver-bids"], text: "Заявки от водителей", Icon: DriverBidIcon },
    { path: RoutePath["map-objects"], text: "Объекты карты", Icon: MapObjectIcon },
    { path: RoutePath.roles, text: "Управление ролями", Icon: RoleIcon },
    { path: RoutePath.reports, text: "Отчёты", Icon: ReportIcon }
];
