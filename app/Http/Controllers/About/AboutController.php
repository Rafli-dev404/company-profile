<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    public function index()
    {
        return inertia('About/Index');
    }
}
