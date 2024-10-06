document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const salary = document.getElementById('salary').value;
    fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: JSON.stringify({ name: name, address: address, salary: salary })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = `<div class="alert alert-success">Employee created successfully!</div>`;
        document.getElementById('employee-form').reset();
    })
    .catch(error => {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger">Error creating employee.</div>`;
        console.error('Error:', error);
    });
});