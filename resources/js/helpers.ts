import type {User} from "@/types/auth";

export function can(user: User | null | undefined, permission: string): boolean{
    return user?.permission?.includes(permission) ?? false;
}

export function role(user: User | null | undefined, role: string): boolean {
    return user?.roles?.includes(role) ?? false;
}


