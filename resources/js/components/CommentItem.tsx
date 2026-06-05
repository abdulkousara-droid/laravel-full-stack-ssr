import { router, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/hooks/use-initials';
import type { Comment } from '@/types';
import { can } from '@/helpers';

export default function CommentItem({ comment }: { comment: Comment }) {
    const user = usePage().props.auth.user

    const getInitials = useInitials();

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this comment?')) {
            router.delete(route('comment.destroy', comment.id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <div className="flex gap-3 rounded-lg border border-sidebar-border/50 p-3 dark:border-sidebar-border">
            <Avatar className="size-8 overflow-hidden rounded-full">
                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-xs text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(comment.user.name)}
                </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{comment.user.name}</span>
                    <span className="text-xs text-muted-foreground">{comment.created_at}</span>
                </div>
                <p className="text-sm text-muted-foreground">{comment.comment}</p>
            </div>
            {can(user, 'manage_comments') && comment.can_delete && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-7 shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={handleDelete}
                >
                    <Trash2 className="size-3.5" />
                    <span className="sr-only">Delete comment</span>
                </Button>
            )}
        </div>
    );
}
