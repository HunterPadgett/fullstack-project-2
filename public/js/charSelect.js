
const assassinHandler = async (event) => {
  event.preventDefault();
  const fighterImage = "/images/pika.png";
  const fighterName = document.getElementById("charNameInput").value.trim();
  console.log(`${fighterName} ${fighterImage}`);
  if (fighterName) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighterImage, fighterName }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('You must enter a Fighter name');
    }
  }
};

const allrounderHandler = async (event) => {
  event.preventDefault();
  const fighterImage = '/images/mario.png';
  const fighterName = document.getElementById("charNameInput").value.trim();
  await console.log(fighterImage);

  if (fighterName) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighterImage, fighterName }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('You must enter a Fighter name');
    }
  }

};
const tankyboiHandler = async (event) => {
  event.preventDefault();
  const fighterImage = "/images/link.png";
  const fighterName = document.getElementById("charNameInput").value.trim();
  // console.log(`${fighterName} ${fighterImage}`);
  if (fighterName) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighter_image, fighter_name }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('You must enter a Fighter name');
    }
  }
};

document.getElementById("tankyboi").addEventListener("click", assassinHandler);
document.getElementById("allrounder").addEventListener("click", allrounderHandler);
document.getElementById("assassin").addEventListener("click", tankyboiHandler);
