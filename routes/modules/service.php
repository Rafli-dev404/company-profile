<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Service\ServiceController;

Route::get('/service', [ServiceController::class, 'index'])->name('service.index');
Route::get('/service/{id}', [ServiceController::class, 'show'])->name('service.show');
