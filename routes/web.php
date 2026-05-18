<?php

use App\Http\Controllers\FeatureController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('/feature', FeatureController::class);

    Route::post('/feature/{feature}/upvote', [\App\Http\Controllers\UpvoteController::class, 'store'])->name('upvote.store');
    Route::delete('/upvote/{feature}', [\App\Http\Controllers\UpvoteController::class, 'destroy'])->name('upvote.destroy');
});




require __DIR__.'/settings.php';
