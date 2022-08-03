formControlCheckbox = [...document.querySelectorAll(".form-control-checkbox")];

formControlCheckbox.forEach((oneByone) => {
  oneByone.addEventListener('click', function () {
    formControlCheckbox.forEach((oneByone) => {
      oneByone.checked = false;
    });
    oneByone.checked = true;
  });
});
const fighterHandler = async (event) => {
  event.preventDefault();

  const fighterName = document.getElementById("charNameInput").value.trim();
  console.log(fighterName);

  document.location.replace("/profile");
};

document
  .getElementById("create-character")
  .addEventListener("click", fighterHandler);

formControlCheckbox = [...document.querySelectorAll(".form-control-checkbox")];
