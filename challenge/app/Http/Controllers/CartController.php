<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CartController extends Controller
{

    public function store()
    {
        dd(request());
        $attributes = $this->validateAirline();
        array_pop($attributes);
        $airline = Airlines::create($attributes);
        foreach (request('availableCity') as $city){
            $airline->cities()->attach($city);
        }
        return Category::latest()->get();
    }
}
