function validateForm(){

    // Get the form fields
    const nameField = document.getElementById('uname');
    const passwordField = document.getElementById('psw');

    // Validate username
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        nameField.focus();
        return false;
    }

    // Validate password
    if (passwordField.value.trim() === '') {
        alert('Please enter your password.');
        passwordField.focus();
        return false;
    } else if (passwordField.value.trim().length < 8) {
        alert('Password must be at least 8 characters long.');
        passwordField.focus();
        return false;
    }

    // Submit the form if all fields are valid
    myForm.submit();
    alert('form submitted');
}