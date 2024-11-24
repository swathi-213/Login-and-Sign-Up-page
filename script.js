function showLogin() {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('signup-form').classList.add('hidden');
  document.getElementById('login-btn').classList.add('active');
  document.getElementById('signup-btn').classList.remove('active');
}

function showSignup() {
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('signup-btn').classList.add('active');
  document.getElementById('login-btn').classList.remove('active');
}

function validateLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  let valid = true;

  if (!validateEmail(email)) {
      document.getElementById('login-email-error').textContent = 'Please enter a valid email.';
      valid = false;
  } else {
      document.getElementById('login-email-error').textContent = '';
  }

  if (password.length < 6) {
      document.getElementById('login-password-error').textContent = 'Password must be at least 6 characters.';
      valid = false;
  } else {
      document.getElementById('login-password-error').textContent = '';
  }

  return valid;
}

function validateSignup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  let valid = true;

  if (name.trim() === '') {
      document.getElementById('signup-name-error').textContent = 'Name is required.';
      valid = false;
  } else {
      document.getElementById('signup-name-error').textContent = '';
  }

  if (!validateEmail(email)) {
      document.getElementById('signup-email-error').textContent = 'Please enter a valid email.';
      valid = false;
  } else {
      document.getElementById('signup-email-error').textContent = '';
  }

  if (password.length < 6) {
      document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters.';
      valid = false;
  } else {
      document.getElementById('signup-password-error').textContent = '';
  }

  return valid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
