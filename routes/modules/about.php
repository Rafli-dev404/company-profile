<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\About\AboutController;

Route::get('/about', [AboutController::class, 'index'])->name('about.index');
