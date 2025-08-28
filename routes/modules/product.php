<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Product\ProductController;
use Inertia\Inertia;

Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');
