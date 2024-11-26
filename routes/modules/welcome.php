<?php

use App\Http\Controllers\Welcome\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web'])->group(function () {
    Route::group(['prefix' => 'welcome'], function () {
        Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
    });
    // Add more routes here
});
