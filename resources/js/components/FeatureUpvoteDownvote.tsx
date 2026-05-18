import {useForm} from "@inertiajs/react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Feature } from '@/types';

export default function FeatureUpvoteDownvote({feature}: { feature: Feature}) {
  const upvoteForm = useForm({
    upvote: true
  });

  const downvoteForm = useForm({
    upvote: false
  });

  const upvoteDownvote = (upvote: boolean) => {
    if (feature.user_has_upvoted && upvote || feature.user_has_downvoted && !upvote) {
      upvoteForm.delete(route('upvote.destroy', feature.id), {
        preserveScroll: true
      });
    } else {
      let form = null;

      if (upvote) {
        form = upvoteForm;
      } else {
        form = downvoteForm;
      }

      form.post(route('upvote.store', feature.id), {
        preserveScroll: true
      })
    }
  }

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <button
                    className={
                        `${feature.user_has_upvoted ? 'text-amber-500' : ''}
                         hover:text-amber-500 transition-colors`
                    }
                    onClick={() => upvoteDownvote(true)}
                >
                    <ChevronUp className={'size-8 md:size-10'} />
                </button>
                <span
                    className={
                        'text-xl font-semibold md:text-2xl' +
                        (feature.user_has_upvoted || feature.user_has_downvoted
                            ? ' text-amber-600'
                            : '')
                    }
                >
                    {feature.upvote_count}
                </span>
                <button
                    className={
                        `${
                            feature.user_has_downvoted ? 'text-amber-500' : ''
                        } transition-colors hover:text-amber-500`
                    }
                    onClick={() => upvoteDownvote(false)}
                >
                    <ChevronDown className={'size-8 md:size-10'} />
                </button>
            </div>
        </>
    );
}
