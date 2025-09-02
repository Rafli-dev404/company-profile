<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\ClientController;

Route::get('/client', [ClientController::class, 'index'])->name('client.index');
