import { useForm, usePage } from '@inertiajs/react';
import { MessageCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { TextAreaInput } from '@/components/ui/TextAreaInput';
import { can } from '@/helpers';
import type { Feature } from '@/types';

export default function NewCommentForm({ feature }: { feature: Feature }) {
    const user = usePage().props.auth.user

    const { data, setData, post, processing, errors, reset } = useForm({
        comment: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('comment.store', feature), {
            preserveScroll: true,
            onSuccess: () => reset('comment'),
        });
    };

    if (!can(user, 'manage_comments')){
      return(
        <div className={'text-center text-gary-600'}>
          You don't have permission to leave comments
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
        <form onSubmit={submit} className="space-y-3">
            <div className="flex items-center gap-2">
                <MessageCircle className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">Leave a comment</span>
            </div>
            <TextAreaInput
                id="comment"
                rows={3}
                value={data.comment}
                onChange={(e) => setData('comment', e.target.value)}
                placeholder="Share your thoughts..."
            />
            <InputError message={errors.comment} />
            <Button type="submit" disabled={processing} size="sm">
                {processing ? 'Posting...' : 'Post Comment'}
            </Button>
        </form>
      </div>
    );
}
