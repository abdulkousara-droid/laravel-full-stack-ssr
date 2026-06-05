import type { User } from './auth';

export type { BreadcrumbItem } from './navigation';
export type { NavItem } from './navigation';
export type { AppLayoutProps, AppVariant, FlashToast, AuthLayoutProps } from './ui';

export type Comment = {
    id: number;
    comment: string;
    user: User;
    created_at: string;
    can_delete: boolean;
};

export type PaginatedData<T> = {
    data: T[];
    links: Record<string, string>;
};

export type Feature = {
    id: number;
    name: string;
    description: string;
    user: User;
    created_at: string;
    upvote_count: number;
    user_has_upvoted: boolean;
    user_has_downvoted: boolean;
    comments_count?: number;
    comments?: Comment[];
};
