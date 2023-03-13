import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum AppRoutes {
    MAIN = "main",
    NOTIFICATIONS = "notifications",
    TASKS = "tasks",
    DRIVERS = "drivers",
    TRUCKS = "trucks",
    TRAILERS = "trailers",
    DRIVER_SHIFTS = "driver-shifts",
    LETOUTS = "letouts",
    SHIFTS = "shifts",
    WORKS_SCHEDULES = "work-schedules",
    USERS = "users",
    TRANSPORT_GROUPS = "transport-groups",
    SERVICE_WORKS = "service-works",
    DRIVER_BIDS = "driver-bids",
    MAP_OBJECTS = "map-objects",
    ROLES = "roles",
    REPORTS = "reports",
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOTIFICATIONS]: "/notifications",
    [AppRoutes.TASKS]: "/tasks",
    [AppRoutes.DRIVERS]: "/drivers",
    [AppRoutes.TRUCKS]: "/trucks",
    [AppRoutes.TRAILERS]: "/trailers",
    [AppRoutes.DRIVER_SHIFTS]: "/driver-shifts",
    [AppRoutes.LETOUTS]: "/letouts",
    [AppRoutes.SHIFTS]: "/shifts",
    [AppRoutes.WORKS_SCHEDULES]: "/work-schedules",
    [AppRoutes.USERS]: "/users",
    [AppRoutes.TRANSPORT_GROUPS]: "/transport-groups",
    [AppRoutes.SERVICE_WORKS]: "/service-works",
    [AppRoutes.DRIVER_BIDS]: "/driver-bids",
    [AppRoutes.MAP_OBJECTS]: "/map-objects",
    [AppRoutes.ROLES]: "/roles",
    [AppRoutes.REPORTS]: "/reports",
    [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: RoutePath.notifications,
        element: <></>
    },
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <></>
    },
    [AppRoutes.DRIVERS]: {
        path: RoutePath.drivers,
        element: <></>
    },
    [AppRoutes.TRUCKS]: {
        path: RoutePath.trucks,
        element: <></>
    },
    [AppRoutes.TRAILERS]: {
        path: RoutePath.trailers,
        element: <></>
    },
    [AppRoutes.DRIVER_SHIFTS]: {
        path: RoutePath["driver-shifts"],
        element: <></>
    },
    [AppRoutes.LETOUTS]: {
        path: RoutePath.letouts,
        element: <></>
    },
    [AppRoutes.SHIFTS]: {
        path: RoutePath.shifts,
        element: <></>
    },
    [AppRoutes.WORKS_SCHEDULES]: {
        path: RoutePath["work-schedules"],
        element: <></>
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <></>
    },
    [AppRoutes.TRANSPORT_GROUPS]: {
        path: RoutePath["transport-groups"],
        element: <></>
    },
    [AppRoutes.SERVICE_WORKS]: {
        path: RoutePath["service-works"],
        element: <></>
    },
    [AppRoutes.DRIVER_BIDS]: {
        path: RoutePath["driver-bids"],
        element: <></>
    },
    [AppRoutes.MAP_OBJECTS]: {
        path: RoutePath["map-objects"],
        element: <></>
    },
    [AppRoutes.ROLES]: {
        path: RoutePath.roles,
        element: <></>
    },
    [AppRoutes.REPORTS]: {
        path: RoutePath.reports,
        element: <></>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
