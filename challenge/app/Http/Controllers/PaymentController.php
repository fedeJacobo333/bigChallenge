<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function store()
    {
        if(request('paymentMethod') === 'card') {
            $paymentAttributes = $this->validatePayment();
        }

        $cartFromReq = request('cart');
        $attributes = ([
            'price' => $cartFromReq['price'],
            'number_elements' => $cartFromReq['number_elements']
        ]);
        $products = $cartFromReq['products'];
        $cart = Cart::create($attributes);
        foreach ($products as $product){
            $cart->products()->attach($product['id'], ['amount' => $product['amount']]);
        }
    }

    public function validatePayment(): array
    {
        return request()->validate(['num' => 'required|numeric|digits_between:8,19',
            'cvv' => 'required|numeric|digits:3',
            'expiration' => 'required|date|after:today'],
            $messages = [
                'num.required' => 'Se debe ingresar un número de tarjeta',
                'cvv.required' => 'Se debe ingresar el CVV de la tarjeta',
                'expiration.required' => 'Se debe ingresar la fecha de expiracion de la tarjeta',
                'num.numeric' => 'El número de tarjeta debe ser un valor numerico',
                'num.digits_between' => 'El número de tarjeta debe ser un valor de 8 a 19 caracteres',
                'cvv.numeric' => 'El cvv de la tarjeta debe ser un valor numerico',
                'cvv.size' => 'El cvv de la tarjeta debe ser un valor de 3 caracteres',
                'expiration.date' => 'La expiración debe ser una fecha',
                'expiration.after' => 'La fecha de expiración no puede ser anterior a hoy',
            ]
        );
    }
}
