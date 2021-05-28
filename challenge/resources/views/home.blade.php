@extends('layout')

@section('content')
    <div id="body">
        <div>
            <a href="admin" class="admin">Menu administrador</a>
        </div>
        <div class="template">
            <router-view></router-view>
        </div>
        <div>
            <app-cart></app-cart>
        </div>
    </div>
    <script src="/js/app.js"></script>
@endsection
