// Function to handle login form submission
async function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

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
      const response = await fetch('/logReg/api/auth/login', { // Use the correct context path and endpoint
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email, password })
      });

      if (response.ok) {
          const result = await response.text();
          alert(result); // Shows "Login successful!" or "Invalid credentials!"
          loginForm.reset();
      } else {
          const error = await response.text();
          alert(error);
      }
  } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
  }
}

// Function to handle signup form submission
async function handleSignup(event) {
  event.preventDefault(); // Prevent the default form submission

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
      const response = await fetch('/logReg/api/auth/register', { // Use the correct context path and endpoint
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password })
      });

      if (response.ok) {
          const result = await response.text();
          alert(result); // Shows "User registered successfully!" or "User already exists!"
          signupForm.reset();
      } else {
          const error = await response.text();
          alert(error);
      }
  } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
  }
}
