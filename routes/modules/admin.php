<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;

Route::get('/admin', [AdminController::class, 'index'])
    ->middleware(['auth', \App\Http\Middleware\Role::class . ':admin'])
    ->name('admin');
