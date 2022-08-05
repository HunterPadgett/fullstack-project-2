# Cthulhu Invades #

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Description ##

Have you ever dreamed of saving the universe from an interdimensional monster? Or maybe you're bored and looking for something to do?  No matter the case, this interactive retro-style video game 
is the perfect way to kill some time.  You get to make your own personal account, choose between several characters with varying stats and proficiencies, and test your steel against the might of Cthulhu.

## Live Website

https://lit-crag-19257.herokuapp.com/

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#Contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Screenshots and Attribution](#Screenshots_and_Attribution)
  - [License](#license)
  
  
  ## Installation

  If cloning locally...
  
  Set up your ```.env file``` and open the ```db``` folder in VSCode's integrated terminal.

  Run ```mysql -u root -p``` this will prompt you to enter your MySQL password. Once your password has been entered run ```SOURCE schema.sql;``` then run ```USE projectTwo_db;``` then run ```exit``` then ```cd ..``` to return to the root level.

  To install all dependencies run ```npm i``` in the terminal.

  ## Usage

  Once dependencies are installed and the database has been populated run ```node server.js``` to start the server.

  ## Contribution

  The contributers for this project are:
  - [Hunter Padgett](https://github.com/HunterPadgett)
  - [Will Summerlin](https://github.com/dubsumm)
  - [Dominic Fisher](https://github.com/DominicFisher18)
  - [Gabriel Fonseca](https://github.com/gabefando)

  ## Tests

  You can test the API routes with Insomnia.

  ## Questions

  If you have any questions you can reach me at gizmokabanjo@gmail.com. 

  Feel free to check out my other projects at [hunterpadgett](https://www.github.com/hunterpadgett).

  ## Screenshots and Attribution

  8-bit characters created with:<br>
  https://make8bitart.com/

  Background Images: <br>
  <a href='https://www.freepik.com/vectors/background'>Background vector created by pikisuperstar - www.freepik.com</a><br>
  <a href='https://www.freepik.com/vectors/pixel-game'>Pixel game vector created by stockgiu - www.freepik.com</a><br>
  <a href='https://www.freepik.com/vectors/arcade-game'>Arcade game vector created by macrovector - www.freepik.com</a><br>

  YouTube Tutorial that gave us inspiration for the fight sequence:<br>
  <a href='https://www.youtube.com/watch?v=sr8bJKSUYwE'>YouTube video by Scott Blenkhorne - https://www.youtube.com/user/primustimus</a>

  ![Home Screen](./public/images/HomeScreen.png "Home Screen")
  ![Login Screen](./public/images/LoginScreen.png "Login Screen")
  ![Character Select Screen](./public/images/CharacterSelect.png "Character Select Screen")
  ![Profile Screen](./public/images/ProfileScreen.png "Profile Screen")
  ![Start Fight screen](./public/images/StartFight.png "Start Fight Screen")
  ![Fight Screen](./public/images/FightScreen.png "Fight Screen")
  ![Victory Screen](./public/images/VictoryScreen.png "Victory Screen")

  ## License
      
  This project is licensed under MIT.

  https://opensource.org/licenses/MIT
