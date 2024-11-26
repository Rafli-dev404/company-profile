<?php

namespace App\Http\Controllers\Welcome;

use App\Http\Controllers\Controller;
use Domain\Welcome\ViewModels\WelcomeViewModel;

class WelcomeController extends Controller
{
    public function index()
    {
        return inertia('Welcome', [
            'model' => new WelcomeViewModel(),
        ]);
    }
}
