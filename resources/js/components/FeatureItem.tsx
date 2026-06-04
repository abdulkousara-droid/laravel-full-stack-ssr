import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
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

                    <div className="py-4">
                        <Link
                            href={route('feature.show', feature)}
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <MessageCircle className="size-4" />
                            <span>Comments</span>
                            {feature.comments_count !== undefined && (
                                <span className="inline-flex items-center justify-center rounded-full bg-muted px-1.5 py-0.5 text-xs font-medium tabular-nums">
                                    {feature.comments_count}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
