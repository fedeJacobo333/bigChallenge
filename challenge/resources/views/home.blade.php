@extends('layout')

@section('content')
    <div id="body">
        <div class="template">
            <div>
                <router-view></router-view>
            </div>
            <div>
                <app-cart></app-cart>
            </div>
        </div>
    </div>
    <script src="/js/app.js"></script>
@endsection
