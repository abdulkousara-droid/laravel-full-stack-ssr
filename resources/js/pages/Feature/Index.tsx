import { Head, Link, usePage, } from '@inertiajs/react';
import FeatureItem from "@/components/FeatureItem";
import {Button} from "@/components/ui/button";
import type { PaginatedData, Feature } from '@/types';
import {ChevronUp} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';



export default function Index({ features }: {features: PaginatedData<Feature>}) {

    const success: any = usePage().props.success;

    return (
        <>
            <Head title="Features" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {success && (
                    <div className="rounded bg-emerald-500 p-6">{success}</div>
                )}
                <div className={'mb-8'}>
                    <Link href={route('feature.create')}>
                        <Button variant={'default'}>Create New Feature</Button>
                    </Link>

                </div>

                {features.data.map((feature) => (
                    <>
                        <FeatureItem feature={feature} />
                    </>
                ))}
            </div>
        </>
    );
}


