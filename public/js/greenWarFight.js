const stats = document.getElementsByClassName('stats');
const charHP = document.getElementById('charHP');
const bossHP = document.getElementById('bossHP');
const startBtn = document.getElementById('floating-btn');
const charImg = document.getElementById('charImg');
const bossImg = document.getElementById('bossImg');
const container = document.getElementById('fightContainer');
const instructions = document.getElementById('instructions');
const bossInstructions = document.getElementById('bossInstructions');
const strongAttack = document.getElementById('strongAttackBtn');
const charMoves = document.getElementById('charMoves');
// const title = document.getElementById('title');
const specAttack = document.getElementById('specAttackBtn');
const preAttack = document.getElementById('preAttackBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const newCharBtn = document.getElementById('newCharBtn');
const mainNavtitle = document.getElementById('mainNavTitle');

// health bar variables
let charHealthBar = 110;
let bossHealthBar = 100;

// function to display the start of the fight
function startFight() {
  // loops thru the .stats class array to display the health bars & attack menu
  for (let i = 0; i < stats.length; i++) {
    stats[i].style.visibility = 'visible';
  }
  // displaying elements at the start of the fight
  startBtn.style.visibility = 'hidden';
  mainNavtitle.innerHTML = 'Defeat Lord Cthulhu to Save the World!';
  charImg.style.opacity = '100%';
  bossImg.style.opacity = '100%';
  container.style.backdropFilter = 'none';
  instructions.innerHTML = 'Choose your attacks below to defeat Cthulhu';
}

async function bossAttacks() {
  // assigning the boss a random attack based off of 3 choices...
  let bossMoves = Math.ceil(Math.random() * 3);
  // switch case for each attack
  switch (bossMoves) {
  // boss attack one named "dark mage lob"
  case 1:
    // gives random num between 0 - 10
    let bossHitOne = Math.round(Math.random() * 10);
    // 65% hit chance of doing dmg between 10-20 hp
    if (bossHitOne <= 6.5) {
      // gives random num between 0 - 10 + 10.... so 10 - 20
      let dmg = Math.round(Math.random() * 10) + 10;
      // boss health subtracted by whatever dmg dealt
      charHealthBar -= dmg;
      if (charHealthBar < 0) {
        charHealthBar = 0;
      }
      // display to user how much damage they dealt
      bossInstructions.innerHTML =
          'Lord Cthulhu hit you with his dark mage lob!';
      // health bar subtracts relative to width of original health bars pixels
      let newCharHealthBar = (charHealthBar / 110) * 244;
      charHP.style.width = `${newCharHealthBar}px`;
    } else {
      // if quick attack missed
      bossInstructions.innerHTML = 'Lord Cthulhu\'s dark mage lob missed!';
    }

    // display spec attack btn if health is 30 or under
    if (charHealthBar <= 30) {
      specAttack.style.visibility = 'visible';
      instructions.innerHTML += '<br>Special Attack Charged!';
    }
    // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
    if (charHealthBar === 0) {
      mainNavtitle.innerHTML =
          'OH NO, GAME OVER! LORD CTHULHU HAS DEFEATED YOU!';
      mainNavtitle.style.fontSize = '42px';
      strongAttack.style.visibility = 'hidden';
      preAttack.style.visibility = 'hidden';
      specAttack.style.visibility = 'hidden';
      charMoves.style.visibility = 'hidden';
      container.style.backdropFilter = 'blur(10px)';
      playAgainBtn.style.visibility = 'visible';
      newCharBtn.style.visibility = 'visible';
    }

    break;

    //  boss attack two named "cosmic smash"
  case 2:
    // gives random num between 0 - 10
    let bossHitTwo = Math.round(Math.random() * 10);
    // 55% hit chance of doing dmg between 15-25 hp
    if (bossHitTwo <= 5.5) {
      // gives random num between 0 - 10 + 15.... so 15 - 25
      let dmg = Math.round(Math.random() * 10) + 15;
      // boss health subtracted by whatever dmg dealt
      charHealthBar -= dmg;
      if (charHealthBar < 0) {
        charHealthBar = 0;
      }
      // display to user how much damage they dealt
      bossInstructions.innerHTML =
          'Lord Cthulhu hit you with his cosmic smash!';
      // health bar subtracts relative to width of original health bars pixels
      let newCharHealthBar = (charHealthBar / 110) * 244;
      charHP.style.width = `${newCharHealthBar}px`;
    } else {
      // if quick attack missed
      bossInstructions.innerHTML = 'Lord Cthulhu\'s cosmic smash missed!';
    }

    // display spec attack btn if health is 30 or under
    if (charHealthBar <= 30) {
      specAttack.style.visibility = 'visible';
      instructions.innerHTML += '<br>Special Attack Charged!';
    }
    // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
    if (charHealthBar === 0) {
      mainNavtitle.innerHTML =
          'OH NO, GAME OVER! LORD CTHULHU HAS DEFEATED YOU!';
      mainNavtitle.style.fontSize = '42px';
      strongAttack.style.visibility = 'hidden';
      preAttack.style.visibility = 'hidden';
      specAttack.style.visibility = 'hidden';
      charMoves.style.visibility = 'hidden';
      container.style.backdropFilter = 'blur(10px)';
      playAgainBtn.style.visibility = 'visible';
      newCharBtn.style.visibility = 'visible';
    }

    break;

    //  boss attack three named "world crusher"
  case 3:
    // gives random num between 0 - 10
    let bossHitThree = Math.round(Math.random() * 10);
    // 35% hit chance of doing dmg between 25-35 hp
    if (bossHitThree <= 3.5) {
      // gives random num between 0 - 10 + 25.... so 25 - 35
      let dmg = Math.round(Math.random() * 10) + 25;
      // boss health subtracted by whatever dmg dealt
      charHealthBar -= dmg;
      if (charHealthBar < 0) {
        charHealthBar = 0;
      }
      // display to user how much damage they dealt
      bossInstructions.innerHTML =
          'Big Yikes! Lord Cthulhu hit you with his world crusher!';
      // health bar subtracts relative to width of original health bars pixels
      let newCharHealthBar = (charHealthBar / 110) * 244;
      charHP.style.width = `${newCharHealthBar}px`;
    } else {
      // if quick attack missed
      bossInstructions.innerHTML = 'Lord Cthulhu\'s world crusher missed!';
    }

    // display spec attack btn if health is 30 or under
    if (charHealthBar <= 30) {
      specAttack.style.visibility = 'visible';
      instructions.innerHTML += '<br>Special Attack Charged!';
    }
    // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
    if (charHealthBar === 0) {
      mainNavtitle.innerHTML =
          'OH NO, GAME OVER! LORD CTHULHU HAS DEFEATED YOU!';
      mainNavtitle.style.fontSize = '42px';
      strongAttack.style.visibility = 'hidden';
      preAttack.style.visibility = 'hidden';
      specAttack.style.visibility = 'hidden';
      charMoves.style.visibility = 'hidden';
      container.style.backdropFilter = 'blur(10px)';
      playAgainBtn.style.visibility = 'visible';
      newCharBtn.style.visibility = 'visible';
    }

    break;

  default:
  }
}

// function determining attack damage and hit percentages for strong attack
async function sAttack() {
  // gives random num between 0 - 10
  let hitPercentage = Math.round(Math.random() * 10);
  // 65% hit chance of doing dmg between 10-20 hp
  if (hitPercentage <= 6.5) {
    // gives random num between 0 - 10 + 10.... so 10 - 20
    let dmg = Math.round(Math.random() * 10) + 8;
    // boss health subtracted by whatever dmg dealt
    bossHealthBar -= dmg;
    if (bossHealthBar < 0) {
      bossHealthBar = 0;
    }
    // display to user how much damage they dealt
    instructions.innerHTML = `You hit Lord Cthulhu with your quick attack for ${dmg} damage! He now has ${bossHealthBar} hp remaining.`;
    // health bar subtracts relative to width of original health bars pixels
    let newBossHealthBar = (bossHealthBar / 100) * 244;
    bossHP.style.width = `${newBossHealthBar}px`;
  } else {
    // if quick attack missed
    instructions.innerHTML = 'Your strong attack missed!';
  }

  // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
  if (bossHealthBar === 0) {
    mainNavtitle.innerHTML = 'YOU WIN! YOU HAVE DEFEATED LORD CTHULHU!';
    mainNavtitle.style.fontSize = '42px';
    strongAttack.style.visibility = 'hidden';
    preAttack.style.visibility = 'hidden';
    specAttack.style.visibility = 'hidden';
    charMoves.style.visibility = 'hidden';
    container.style.backdropFilter = 'blur(10px)';
    playAgainBtn.style.visibility = 'visible';
    newCharBtn.style.visibility = 'visible';
    bossImg.style.transform = 'rotate(90deg)';
    charImg.setAttribute('id', 'winImg');
  } else {
    await bossAttacks();
  }
}

// function determining attack damage and hit percentages for precision attack
async function pAttack() {
  // gives random num between 0 - 10
  let hitPercentage = Math.round(Math.random() * 10);
  // 75% hit chance of doing dmg between 5-15 hp
  if (hitPercentage <= 7.5) {
    // gives random num between 0 - 10 + 5.... so 5 - 15
    let dmg = Math.round(Math.random() * 10) + 4;
    // boss health subtracted by whatever dmg dealt
    bossHealthBar -= dmg;
    if (bossHealthBar < 0) {
      bossHealthBar = 0;
    }
    // display to user how much damage they dealt
    instructions.innerHTML = `You hit Lord Cthulhu with your precision attack for ${dmg} damage! He now has ${bossHealthBar} hp remaining.`;
    // health bar subtracts relative to width of original health bars pixels
    let newBossHealthBar = (bossHealthBar / 100) * 244;
    bossHP.style.width = `${newBossHealthBar}px`;
  } else {
    // if quick attack missed
    instructions.innerHTML = 'Your precision attack missed!';
  }

  // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
  if (bossHealthBar === 0) {
    mainNavtitle.innerHTML = 'YOU WIN! YOU HAVE DEFEATED LORD CTHULHU!';
    mainNavtitle.style.fontSize = '42px';
    strongAttack.style.visibility = 'hidden';
    preAttack.style.visibility = 'hidden';
    specAttack.style.visibility = 'hidden';
    charMoves.style.visibility = 'hidden';
    container.style.backdropFilter = 'blur(10px)';
    playAgainBtn.style.visibility = 'visible';
    newCharBtn.style.visibility = 'visible';
    bossImg.style.transform = 'rotate(90deg)';
    charImg.setAttribute('id', 'winImg');
  } else {
    await bossAttacks();
  }
}

// function determining attack damage and hit percentages for special attack
async function speAttack() {
  // gives random num between 0 - 10
  let hitPercentage = Math.round(Math.random() * 10);
  // 85% hit chance of doing dmg between 25-35 hp
  if (hitPercentage <= 8.5) {
    // gives random num between 0 - 10 + 25.... so 25 - 35
    let dmg = Math.round(Math.random() * 10) + 25;
    // boss health subtracted by whatever dmg dealt
    bossHealthBar -= dmg;
    if (bossHealthBar < 0) {
      bossHealthBar = 0;
    }
    // display to user how much damage they dealt
    instructions.innerHTML = `You hit Lord Cthulhu with your special attack for ${dmg} damage! He now has ${bossHealthBar} hp remaining.`;
    // health bar subtracts relative to width of original health bars pixels
    let newBossHealthBar = (bossHealthBar / 100) * 244;
    bossHP.style.width = `${newBossHealthBar}px`;
  } else {
    // if quick attack missed
    instructions.innerHTML = 'Tough Luck! Your special attack missed!';
  }

  // changing the title to display if user won. hiding attack buttons so user can no longer attack once someone's health bar reaches 0
  if (bossHealthBar === 0) {
    console.log('dub');
    mainNavtitle.innerHTML = 'YOU WIN! YOU HAVE DEFEATED LORD CTHULHU!';
    mainNavtitle.style.fontSize = '42px';
    strongAttack.style.visibility = 'hidden';
    preAttack.style.visibility = 'hidden';
    specAttack.style.visibility = 'hidden';
    charMoves.style.visibility = 'hidden';
    container.style.backdropFilter = 'blur(10px)';
    playAgainBtn.style.visibility = 'visible';
    newCharBtn.style.visibility = 'visible';
    bossImg.style.transform = 'rotate(90deg)';
    charImg.setAttribute('id', 'winImg');
  } else {
    await bossAttacks();
  }
}

function playAgain() {
  bossHealthBar = 100;
  charHealthBar = 110;
  let newBossHealthBar = (bossHealthBar / 100) * 244;
  bossHP.style.width = `${newBossHealthBar}px`;
  let newCharHealthBar = (charHealthBar / 110) * 244;
  charHP.style.width = `${newCharHealthBar}px`;
  mainNavtitle.innerHTML = 'Defeat Lord Cthulhu to Save the World!';
  bossImg.style.transform = 'rotate(0deg)';
  playAgainBtn.style.visibility = 'hidden';
  newCharBtn.style.visibility = 'hidden';
  strongAttack.style.visibility = 'visible';
  preAttack.style.visibility = 'visible';
  instructions.innerHTML = '';
  bossInstructions.innerHTML = '';
  startFight();
}

startBtn.addEventListener('click', startFight);
strongAttack.addEventListener('click', sAttack);
preAttack.addEventListener('click', pAttack);
specAttack.addEventListener('click', speAttack);
playAgainBtn.addEventListener('click', playAgain);
