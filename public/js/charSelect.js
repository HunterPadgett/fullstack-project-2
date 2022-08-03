const fighterHandler = async (event) => {
  event.preventDefault();

  const fighterName = document.getElementById('charNameInput').value.trim();
  console.log(fighterName);

  document.location.replace('/profile');
};

document
  .getElementById('create-character')
  .addEventListener('click', fighterHandler);
