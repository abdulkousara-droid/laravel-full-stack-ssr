import { Link, router } from '@inertiajs/react';
import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react'; // Added MoreHorizontal icon
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Feature } from '@/types';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative flex min-h-[100vh] overflow-hidden rounded-xl border border-sidebar-border/70 p-4 md:min-h-min dark:border-sidebar-border">
            <div className="absolute top-4 right-4 z-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="end">
                        <DropdownMenuItem asChild>
                            <Link href={route('feature.edit', feature)}>
                                Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() => {
                                if (
                                    confirm(
                                        'Are you sure you want to delete this feature?',
                                    )
                                ) {
                                    router.delete(
                                        route('feature.destroy', feature),
                                    );
                                }
                            }}
                        >
                            <Link href={route('feature.destroy', feature)}>
                                Delete
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex w-full gap-4 pr-8">
                {' '}
                <div className="flex flex-col items-center justify-center gap-2">
                    <button className="transition-colors hover:text-amber-500">
                        <ChevronUp className="size-8 md:size-10" />
                    </button>
                    <span className="text-xl font-semibold md:text-2xl">
                        12
                    </span>
                    <button className="transition-colors hover:text-amber-500">
                        <ChevronDown className="size-8 md:size-10" />
                    </button>
                </div>

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
