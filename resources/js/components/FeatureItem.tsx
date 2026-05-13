import {ChevronDown, ChevronUp} from 'lucide-react';
import { useState } from 'react';
import type {  Feature } from '@/types';

export default function FeatureItem({ feature }: { feature: Feature }) {
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleExpansion = () => {
       setIsExpanded(!isExpanded);
   }

    return (
        <>
            <div className="relative flex min-h-[100vh] overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <div className="flex gap-4 p-4">
                    <div
                        className={
                            'flex flex-col items-center justify-center gap-2'
                        }
                    >
                        <button>
                            <ChevronUp className={'size-12'} />
                        </button>
                        <span className={'text-2xl font-semibold'}>12</span>
                        <button>
                            <ChevronDown className={'size-12'} />
                        </button>
                    </div>
                    <div className={'flex-1'}>
                        <h2 className={'mb-2 text-2xl'}>{feature.name}</h2>
                        <p>
                            {isExpanded
                                ? feature.description
                                : feature.description.substring(0, 200) + '...'}
                        </p>
                        <button
                            onClick={toggleExpansion}
                            className={'text-amber-500 hover:underline'}
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
