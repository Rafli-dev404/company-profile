<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Index');
    }

    public function home()
    {
        return inertia('Admin/Home');
    }
}
