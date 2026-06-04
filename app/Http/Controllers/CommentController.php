<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request, Feature $feature)
    {
        $data = $request->validate([
            'comment' => ['required', 'string', 'max:2000'],
        ]);

        Comment::create([
            'comment' => $data['comment'],
            'user_id' => Auth::id(),
            'feature_id' => $feature->id,
        ]);

        return back();
    }

    public function destroy(Comment $comment)
    {
        if ($comment->user_id !== auth()->id()) {
            abort(403);
        }

        $comment->delete();

        return back();
    }
}
