<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;

Route::middleware(['auth', \App\Http\Middleware\Role::class . ':admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('dashboard');
        Route::get('/home', [AdminController::class, 'home'])->name('home');
        Route::get('/team', [AdminController::class, 'team'])->name('team');
        Route::get('/service', [AdminController::class, 'service'])->name('service');
    });
