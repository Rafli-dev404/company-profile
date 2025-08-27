<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Product\ProductController;
use Inertia\Inertia;

Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');
Route::get('/product/maximple', function () {
    return Inertia::render('Product/Maximple');
})->name('product.maximple');

Route::get('/product/maxcode', function () {
    return Inertia::render('Product/Maxcode');
})->name('product.maxcode');

Route::get('/product/ajuin', function () {
    return Inertia::render('Product/Ajuin');
})->name('product.ajuin');

Route::get('/product/maxipos', function () {
    return Inertia::render('Product/Maxipos');
})->name('product.maxipos');
