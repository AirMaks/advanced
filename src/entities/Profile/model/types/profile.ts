export interface Company {
    id: number;
    cr_id: number;
    name: string;
    full_name: string;
    email: string;
    comment: string | null;
    active: boolean;
    address_real: string | null;
    address_post: string | null;
    site: string | null;
    inn: string;
    kpp: string | null;
    ogrn: string | null;
    bank_name: string | null;
    payment_account: string | null;
    corr_account: string | null;
    timezone: string;
    phone: string;
    apikey: string | null;
    options: {
        days_to_set_task_for_docs: number | string | null | boolean;
        days_to_service_work_schedule: number | string | null | boolean;
        // остальные поля options
    };
    automatic_vacation_creation: boolean;
}

export interface Role {
    id: number;
    company_id: number | string | null;
    alias: string | null;
    name: string | null;
}

export interface Permissions {
    drivers: {
        view: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    vehicles: {
        view: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    // остальные разрешения
}

export interface Profile {
    id: number;
    cr_id: number | null;
    deleted: boolean;
    first_name: string;
    last_name: string;
    middle_name: string | null;
    short_name: string;
    email: string;
    phone: string;
    comment: string | null;
    hired_at: string | null;
    fired_at: string | null;
    company: Company;
    driver_status: string | null;
    locale: string;
    last_activity: string | null;
    roles: Role[];
    permissions: Permissions;
    transport_groups: string | null;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
