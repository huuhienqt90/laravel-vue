<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => 'web', 'as' => 'dashboard.', 'prefix' => 'dashboard', 'namespace' => 'Dashboard'], function($route)
{
    $route->get('login', 'Auth\LoginController@showLoginForm')->name('showLoginForm');
    $route->post('login', 'Auth\LoginController@login')->name('postLoginForm');
    $route->get('logout', 'Auth\LoginController@logout')->name('logout');
    $route->group(['middleware' => 'dashboard' ], function() use($route)
    {
        $route->get('{path?}', 'DashboardController@index')->where('path', '[\/\w\.-]*')->name('dashboard');
    });
});