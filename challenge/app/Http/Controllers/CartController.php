<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CartController extends Controller
{

    public function store()
    {
        dd(request());
        return Category::latest()->get();
    }
}
