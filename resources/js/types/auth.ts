export type User = {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
    permissions: string[];
    roles: string[];
};

export type PaginatedData<T> = {
    data: T[];
    links: Record<string, string>
};

export type Feature = {
    id: number;
    name: string;
    description: string;
    user: User;
    created_at: string;
};

export type Auth = {
    user: User;
};

export type TwoFactorSetupData = {
    svg: string;
    url: string;
};

export type TwoFactorSecretKey = {
    secretKey: string;
};
