function validateLogin() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are not empty (you can add more validation)
    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('error-message').innerText = 'Please enter both username and password.';
        return;
    }

    // Simulate a simple login validation (replace with actual server-side validation)
    if (username === 'nirumala' && password === 'niru02siva') {
        // Redirect to dashboard or display a success message
        alert('Login successful!');
    } else {
        // Display an error message
        document.getElementById('error-message').innerText = 'Invalid username or password.';
    }
}
