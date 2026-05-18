import { Link } from '@inertiajs/react';
import { useState } from 'react';
import type { Feature } from '@/types';
import FeatureActionsDropdown from "@/components/FeatureActionsDropdown";
import FeatureUpvoteDownvote from "@/components/FeatureUpvoteDownvote";

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative flex min-h-[100vh] overflow-hidden rounded-xl border border-sidebar-border/70 p-4 md:min-h-min dark:border-sidebar-border">
            <div className="flex w-full gap-4 pr-8">
                <FeatureActionsDropdown feature={feature} />{' '}
               <FeatureUpvoteDownvote feature={feature}/>
                <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-medium">
                        <Link
                            href={route('feature.show', feature)}
                            className="hover:underline"
                        >
                            {feature.name}
                        </Link>
                    </h2>

                    {(feature.description || '').length > 200 ? (
                        <>
                            <p className="break-words text-muted-foreground">
                                {isExpanded
                                    ? feature.description
                                    : `${feature.description.slice(0, 200)}...`}
                            </p>
                            <button
                                onClick={toggleExpansion}
                                className="mt-1 text-sm font-medium text-amber-500 hover:underline"
                            >
                                {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                        </>
                    ) : (
                        <p className="break-words text-muted-foreground">
                            {feature.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
