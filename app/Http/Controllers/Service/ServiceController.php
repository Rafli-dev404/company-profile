<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        return inertia('Service/Index');
    }
}
