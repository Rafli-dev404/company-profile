<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;


class ClientController extends Controller
{
    public function index()
    {
        return inertia('Client/Index');
    }
}
