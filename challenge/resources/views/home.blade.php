@extends('layout')

@section('content')
    <div>
        @foreach($categories as $category)
            <card>
                <img src="{{ $category->image }}" width="50" height="50">
                <h3>{{ $category->name }}</h3>
            </card>
        @endforeach
    </div>
@endsection
