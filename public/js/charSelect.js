const assassinHandler = async (event) => {
  event.preventDefault();
  const fighterImage = "/images/pika.png";
  const fighterName = document.getElementById("charNameInput").value.trim();
  console.log(`${fighterName} ${fighterImage}`);

  // document.location.replace("/profile");
};
const allrounderHandler = async (event) => {
  event.preventDefault();
  const fighterImage = '/images/mario.png';
  const fighterName = document.getElementById("charNameInput").value.trim();
  await console.log(fighterImage);

  // document.location.replace("/profile");
};
const tankyboiHandler = async (event) => {
  event.preventDefault();
  const fighterImage = "/images/link.png";
  const fighterName = document.getElementById("charNameInput").value.trim();
  console.log(`${fighterName} ${fighterImage}`);
  // document.location.replace("/profile");
};

document.getElementById("tankyboi").addEventListener("click", assassinHandler);
document.getElementById("allrounder").addEventListener("click", allrounderHandler);
document.getElementById("assassin").addEventListener("click", tankyboiHandler);
