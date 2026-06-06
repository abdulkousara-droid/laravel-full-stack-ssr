import { Head, Link, usePage, } from '@inertiajs/react';
import FeatureItem from "@/components/FeatureItem";
import {Button} from "@/components/ui/button";
import { can } from '@/helpers';
import type { PaginatedData, Feature } from '@/types';



export default function Index({ features }: {features: PaginatedData<Feature>}) {

    const success: any = usePage().props.success;
    const user = usePage().props.auth.user

    return (
        <>
            <Head title="Features" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {success && (
                    <div className="rounded bg-emerald-500 p-6">{success}</div>
                )}
                {can(user, 'mange_features') && (
                    <div className={'mb-8'}>
                        <Link href={route('feature.create')}>
                            <Button variant={'default'}>
                                Create New Feature
                            </Button>
                        </Link>
                    </div>
                )}

                {features.data.map((feature) => (
                    <FeatureItem key={feature.id} feature={feature} />
                ))}
            </div>
        </>
    );
}


