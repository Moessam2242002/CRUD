function fetchEmployees() {
    fetch('/api/employees')
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById('employee-list');
            employeeList.innerHTML = '';
            employees.forEach(employee => {
                const row = document.createElement('tr');
                row.setAttribute('data-id', employee.id);
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.address}</td>
                    <td>${employee.salary}</td>
                    <td>
                        <a href="/employees/${employee.id}/edit" class="btn btn-warning btn-sm">Edit</a>
                        <a href="/employees/${employee.id}/show" class="btn btn-info btn-sm">Show</a>
                        <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${employee.id})">Delete</button>
                    </td>
                `;
                employeeList.appendChild(row);
            });
        })
        .catch(error => {
            document.getElementById('message').innerHTML = `<div class="alert alert-danger">Error fetching employees.</div>`;
            showMessage();
            console.error('Error:', error);
        });
}
function deleteEmployee(employeeId) {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch(`/api/employees/${employeeId}`, {
        method: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': token,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').innerHTML = `<div class="alert alert-success">Employee deleted successfully!</div>`;
            showMessage();
            document.querySelector(`tr[data-id="${employeeId}"]`).remove();
        } else {
            throw new Error('Failed to delete employee.');
        }
    })
    .catch(error => {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger">Error deleting employee.</div>`;
        showMessage();
        console.error('Error:', error);
    });
}
function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.classList.add('show');
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 3000);
}
document.addEventListener('DOMContentLoaded', fetchEmployees);