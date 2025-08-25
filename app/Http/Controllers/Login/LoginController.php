<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Login/Index');
    }
}
