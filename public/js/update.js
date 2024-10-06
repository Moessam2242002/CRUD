document.addEventListener('DOMContentLoaded', function () {
    const urlParts = window.location.pathname.split('/');
    const employeeId = urlParts[urlParts.length - 2];
    fetch(`/api/employees/${employeeId}`)
        .then(response => response.json())
        .then(employee => {
            document.getElementById('name').value = employee.name;
            document.getElementById('address').value = employee.address;
            document.getElementById('salary').value = employee.salary;
        })
        .catch(error => console.error('Error fetching employee:', error));
        document.getElementById('employee-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const salary = document.getElementById('salary').value;
        fetch(`/api/employees/${employeeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ name: name, address: address, salary: salary })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerHTML = `<div class="alert alert-success">Employee updated successfully!</div>`;
        })
        .catch(error => {
            document.getElementById('message').innerHTML = `<div class="alert alert-danger">Error updating employee.</div>`;
            console.error('Error:', error);
        });
    });
});