function fetchEmployee(employeeId) {
    fetch(`/api/employees/${employeeId}`)
        .then(response => response.json())
        .then(employee => {
            const employeeDetails = document.getElementById('employee-details');
            employeeDetails.innerHTML = `
                <p><strong>ID:</strong> ${employee.id}</p>
                <p><strong>Name:</strong> ${employee.name}</p>
                <p><strong>Address:</strong> ${employee.address}</p>
                <p><strong>Salary:</strong> ${employee.salary}</p>
            `;
        })
        .catch(error => {
            document.getElementById('employee-details').innerHTML = `<div class="alert alert-danger">Error fetching employee details.</div>`;
            console.error('Error:', error);
        });
}
const urlParts = window.location.pathname.split('/');
const employeeId = urlParts[urlParts.length - 2];
document.addEventListener('DOMContentLoaded', function() {
    fetchEmployee(employeeId);
});