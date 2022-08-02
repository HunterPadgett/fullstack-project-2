// login signup logic we can edit to our signup login page


const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('user-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Incorrect email or password');
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const name = document.getElementById('name-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  if (username && name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById('login-form')
  .addEventListener('submit', loginHandler);

document
  .getElementById('signup-form')
  .addEventListener('submit', signupHandler);