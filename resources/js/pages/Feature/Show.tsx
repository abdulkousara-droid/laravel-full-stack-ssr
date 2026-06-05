import { Head } from '@inertiajs/react';
import type { Feature } from '@/types';
import FeatureUpvoteDownvote from "@/components/FeatureUpvoteDownvote";
import NewCommentForm from "@/components/NewCommentForm";
import CommentItem from "@/components/CommentItem";


export default function Show({ feature }: {feature: Feature}) {

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


                <NewCommentForm feature={feature} />


              {feature.comments && feature.comments.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Comments ({feature.comments_count})
                  </h3>
                  {feature.comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                  ))}
                </div>
              )}
            </div>
        </>
    );
}


