<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Category;

class CartController extends Controller
{

    public function store()
    {
        $cartFromReq = request('cart');
        $attributes = ([
            'price' => $cartFromReq['price'],
            'number_elements' => $cartFromReq['number_elements']
        ]);
        $products = $cartFromReq['products'];
        $cart = Cart::create($attributes);
        foreach ($products as $product){
            $cart->products()->attach($product['id']);
        }
    }
}
