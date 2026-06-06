<?php

use App\EnumPermissionsEnum;
use App\EnumRolesEnum;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\UpvoteController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified', 'role:' . EnumRolesEnum::User->value])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('feature', FeatureController::class)
        ->except(['index', 'show'])
        ->middleware('can:' . EnumPermissionsEnum::ManageFeatures->value);

    Route::get('/feature', [FeatureController::class, 'index'])
        ->name('feature.index');

    Route::get('/feature/{feature}', [FeatureController::class, 'show'])
        ->name('feature.show');

    Route::post('/feature/{feature}/upvote', [UpvoteController::class, 'store'])
        ->name('upvote.store');
    Route::delete('/upvote/{feature}', [UpvoteController::class, 'destroy'])
        ->name('upvote.destroy');

    Route::post('/feature/{feature}/comments', [CommentController::class, 'store'])
        ->name('comment.store')
        ->middleware('can:' . EnumPermissionsEnum::ManageComments->value);
    Route::delete('/comment/{comment}', [CommentController::class, 'destroy'])
        ->name('comment.destroy')
        ->middleware('can:' . EnumPermissionsEnum::ManageComments->value);
});




require __DIR__.'/settings.php';
