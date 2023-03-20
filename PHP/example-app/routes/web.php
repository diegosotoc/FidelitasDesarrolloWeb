<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('users/create', function () {
    return "Pagina de creacion del usuario " ;
});

// Route::get('users/{id}', function ($id) {
//     return "Bienvenido Usuario: ${id} " ;
// });

// Parametro opcional: Se coloca con un ?
Route::get('users/{nombre}/{nacionalidad?}', function ($nombre, $nacionalidad="No se inicio nacionalidad") {
    return "Bienvenido Usuario: ${nombre} de la nacionalidad ${nacionalidad} " ;
});
