<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Team\TeamController;

Route::get('/team', [TeamController::class, 'index'])->name('team.index');
