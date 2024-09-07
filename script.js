// Get elements
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".signup");
const loginRadio = document.getElementById("login");
const signupRadio = document.getElementById("signup");
const sliderTab = document.querySelector(".slider-tab");
const loginButton = loginForm.querySelector('input[type="submit"]');
const signupButton = signupForm.querySelector('input[type="submit"]');

// Add event listeners for form switch
loginRadio.addEventListener("change", () => {
  sliderTab.style.left = "0";
  loginForm.style.transform = "translateX(0%)";
  signupForm.style.transform = "translateX(100%)";
});

signupRadio.addEventListener("change", () => {
  sliderTab.style.left = "50%";
  loginForm.style.transform = "translateX(-100%)";
  signupForm.style.transform = "translateX(0%)";
});

// Form validation
function validateEmail(email) {
  // Basic email validation pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  // Minimum 6 characters for the password
  return password.length >= 6;
}

// Function to handle login form submission
function handleLogin(event) {
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

  // Simulate successful login (You can replace this with actual API calls)
  alert("Login successful!");

  // Clear the form fields
  loginForm.reset();
}

// Function to handle signup form submission
function handleSignup(event) {
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

  // Simulate successful signup (You can replace this with actual API calls)
  alert("Signup successful!");

  // Clear the form fields
  signupForm.reset();
}

// Attach event listeners for form submission
loginButton.addEventListener("click", handleLogin);
signupButton.addEventListener("click", handleSignup);
