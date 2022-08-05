const assassinHandler = async (event) => {
  event.preventDefault();
  const fighter_image = '/images/pika.png';
  const fighter_source ='./js/pikaFight.js'
  const fighter_name = document.getElementById('charNameInput').value.trim();
  console.log(`${fighter_name} ${fighter_image}`);
  if (fighter_name) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighter_image, fighter_name, fighter_source }),
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
  const fighter_image = '/images/mario.png';
  const fighter_source ='./js/plumberFight.js'
  const fighter_name = document.getElementById('charNameInput').value.trim();
  await console.log(fighter_image);

  if (fighter_name) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighter_image, fighter_name, fighter_source }),
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
  const fighter_source ='./js/greenWarFight.js'
  const fighter_image = '/images/link.png';
  const fighter_name = document.getElementById('charNameInput').value.trim();
  // console.log(`${fighter_name} ${fighter_image}`);
  if (fighter_name) {
    const response = await fetch('/api/fighter', {
      method: 'POST',
      body: JSON.stringify({ fighter_image, fighter_name, fighter_source }),
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

document.getElementById('assassin').addEventListener('click', assassinHandler);
document.getElementById('allrounder').addEventListener('click', allrounderHandler);
document.getElementById('tankyboi').addEventListener('click', tankyboiHandler);

