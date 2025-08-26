<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        return inertia('Product/Index');
    }
}
