import { Head, } from '@inertiajs/react';
import FeatureItem from "@/components/FeatureItem";
import type { Feature } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FeatureUpvoteDownvote from "@/components/FeatureUpvoteDownvote";


export default function Show({ feature }: {feature: Feature}) {
  console.log(feature);

    return (
        <>
            <Head title={`Feature ${feature.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
              <div className="relative flex min-h-[100vh] overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex gap-4 p-4">
                  <FeatureUpvoteDownvote feature={feature}/>
                  <div className={'flex-1'}>
                    <h2 className={'mb-2 text-2xl'}>{feature.name}</h2>
                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}


