<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;

Route::middleware(['auth', \App\Http\Middleware\Role::class . ':admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
});
