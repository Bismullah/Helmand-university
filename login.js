document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    let isValid = true;
  
    // Validate username
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (usernameInput.value.trim() === '') {
      usernameError.textContent = 'Please enter a username.';
      usernameInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      usernameError.textContent = '';
      usernameInput.parentElement.classList.remove('has-error');
    }
  
    // Validate password
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Please enter a password.';
      passwordInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      passwordError.textContent = '';
      passwordInput.parentElement.classList.remove('has-error');
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      // Add your form submission logic here
      alert('Form is valid. Submitting...');
     
    }
  });