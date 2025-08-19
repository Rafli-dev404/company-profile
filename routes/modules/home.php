<?php

use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web']) ->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('Home');
});
