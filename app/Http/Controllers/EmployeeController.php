<?php
namespace App\Http\Controllers;
use App\Models\Employee;
use Illuminate\Http\Request;
class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }
    public function store(Request $request)
    {
        $employee = Employee::create($request->all());
        return response()->json($employee, 201);
    }

    public function show($id)
    {
        $employee = Employee::findOrFail($id);
        return response()->json($employee);
    }
    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->all());
        return response()->json($employee);
    }
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json(null, 204);
    }
}
