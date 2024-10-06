<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<style>
</style>
<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Employees List</h1>
        <div class="mb-3">
            <a href="/employees/create" class="btn btn-primary">Create New Employee</a>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="employee-list">
            </tbody>
        </table>
        <div id="message" class="mt-3 text-center"></div>
    </div>
    <script src="{{ asset('js/index.js') }}"></script>
</body>
</html>