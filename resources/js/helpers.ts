import type {User} from "@/types/auth";

export function can(user: User, permission: string): boolean{
    return user.permission.includes(permission);
}

export function role(user: User, role: string): boolean {
    return user.roles.includes(role);
}


