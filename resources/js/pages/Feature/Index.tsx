import { Head, } from '@inertiajs/react';
import FeatureItem from "@/components/FeatureItem";
import type { PaginatedData, Feature } from '@/types';


export default function Index({ features }: {features: PaginatedData<Feature>}) {
    return (
        <>
            <Head title="Features" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {features.data.map((feature) => (
                    <>
                        <FeatureItem feature={feature}/>
                    </>
                ))}
            </div>
        </>
    );
}


