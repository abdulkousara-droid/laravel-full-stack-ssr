import { Head, Link } from '@inertiajs/react';
import type { User } from '@/types/auth';




export default function Index({ users }: {users: User[]}) {

    return (
        <>
            <Head title="Users" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <div className="bg-neutral-primary-soft rounded-base border-default relative overflow-x-auto border shadow-xs">
                    <table className="text-body w-full text-left text-sm rtl:text-right">
                        <thead className="text-body bg-neutral-secondary-soft rounded-base border-default border-b text-sm">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    User name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    Created At
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    Roles
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 font-medium"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr className="bg-neutral-primary border-default border-b">
                                    <th
                                        scope="row"
                                        className="text-heading px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        {user.created_at}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.roles.join(', ')}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={route('user.edit', user.id)}
                                            className={'text-blue-500'}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


