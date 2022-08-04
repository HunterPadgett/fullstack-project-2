// login signup logic we can edit to our signup login page

const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('user-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // If successful, redirect the browser to the charselect page
      document.location.replace('/charSelect');
    } else {
      alert('Incorrect username or password');
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/charSelect');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('login-form').addEventListener('submit', loginHandler);

document
  .getElementById('signup-form')
  .addEventListener('submit', signupHandler);
