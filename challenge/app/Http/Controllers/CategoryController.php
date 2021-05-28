<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{

    public function get()
    {
        return Category::latest()->get();
    }


    public function productsInCategory($category)
    {
        return Category::findOrFail($category)->products()->get();
    }
}
