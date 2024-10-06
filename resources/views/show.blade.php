<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Employee</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div class="container mt-5">
        <h1>Employee Details</h1>
        <div id="employee-details" class="mt-4">
        </div>
        <a href="/" class="btn btn-primary mt-3">Back to Employees List</a>
    </div>
    <script src="{{ asset('js/show.js') }}"></script>
</body>
</html>
