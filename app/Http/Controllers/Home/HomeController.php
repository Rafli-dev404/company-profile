<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Domain\Home\ViewModels\HomeViewModels;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home/Index', [
            'model' => (new HomeViewModels())->toArray(),
        ]);
    }
}
