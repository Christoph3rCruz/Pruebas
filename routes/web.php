<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/contactanos', function () {
    return view('contactanos');
});
Route::get('/cena', function () {
    return view('cena');
});
Route::get('/comida', function () {
    return view('comida');
});
Route::get('/desayuno', function () {
    return view('desayuno');
});
Route::get('/especialidades', function () {
    return view('especialidades');
});
Route::get('/login', function () {
    return view('login');
});
Route::get('/entradas', function () {
    return view('Menu_Entradas');
});
Route::get('/password', function () {
    return view('password');
});
Route::get('/register', function () {
    return view('register');
});
Route::get('/reservas', function () {
    return view('reservas');
});
Route::get('/tables', function () {
    return view('tables');
});
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
