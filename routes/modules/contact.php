<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Contact\ContactController;

Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
