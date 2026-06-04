import { useForm } from '@inertiajs/react';
import { MessageCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { TextAreaInput } from '@/components/ui/TextAreaInput';
import type { Feature } from '@/types';

export default function NewCommentForm({ feature }: { feature: Feature }) {
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

    return (
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
    );
}
