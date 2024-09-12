// Login form submission
async function handleLogin(event) {
  event.preventDefault();

  const email = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  try {
    const response = await fetch('http://localhost:8081/logReg/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${email}&password=${password}`
    });
    const result = await response.text();
    alert(result); // Display backend response
  } catch (error) {
    console.error('Error during login:', error);
    alert('Login failed!');
  }
}

// Signup form submission
async function handleSignup(event) {
  event.preventDefault();

  const email = signupForm.querySelector('input[type="text"]').value;
  const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
  const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(password)) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await fetch('http://localhost:8081/logReg/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const result = await response.text();
    alert(result); // Display backend response
  } catch (error) {
    console.error('Error during signup:', error);
    alert('Signup failed!');
  }
}
