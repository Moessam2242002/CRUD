<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/employees/create', function () {
    return view('create_employee');
});
use App\Models\Employee;

Route::get('/employees/{id}/edit', function ($id) {
    return view('update_employee', ['employeeId' => $id]);
});
Route::get('/employees/{id}/show', function ($id) {
    return view('show', ['employeeId' => $id]);
});
Route::get('/', function () {
    return view('employees_index');
});
