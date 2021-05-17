let section = document.getElementById('container');
let title = document.getElementById('header');
let difficulty = document.getElementsByClassName('level__start');
let card, choice, line;
for (let e of difficulty) {
  e.addEventListener('click', levelDifficulty => {
    if (choice) {
      choice.classList.toggle('choicen__start');
    };
    choice = levelDifficulty.target;
    choice.classList.toggle('choicen__start');
  });
}

let btn = document.getElementById('button');
btn.addEventListener('click', start => {
  choice.classList.toggle('choicen__start');
goAndAgain();
document.body.classList.toggle('game-page');
(choice.id === 'easy') ? getEasy():
(choice.id === 'normal') ? getNormal():
getHard();
choice = null;
let cards = document.querySelectorAll('.game-page__img');
let cardChoice;
for (let e of cards) {
  e.addEventListener('click', check => {
    cardChoice = check.target;
    let rotate = cardChoice.closest('.game-page__img');
    rotate.classList.toggle('game-page__img_rotation');
    for (let g of cards) {
      g.addEventListener('click', getNewGame => {
            let newGame = document.querySelectorAll('div');
            for (let k of newGame) {
             k.remove();
            }
            document.body.classList.toggle('game-page');
            goAndAgain();
          })
    }
  });
 }
});

let createLine = () => {
  line = document.createElement('div');
  document.body.append(line);
  line.classList.toggle('game-page__line');
}

let gameCards = () => {
  card = document.createElement('div');
  line.append(card);
  card.classList.toggle('game-page__img');
  getBackCardImg(getBackCard);
  getFrontCardImg(getFrontCard);
}

let getBackCard = () => {
  let back = document.createElement('div');
  back.classList.toggle('game-page__back');
  card.append(back);
  return back;
}

let getBackCardImg = () => {
  let backImg = document.createElement('img');
  backImg.src = 'img/back.png';
  getBackCard().append(backImg);
  backImg.classList.toggle('card__pic');
  return backImg;
}

let getFrontCard = () => {
  let front = document.createElement('div');
  card.append(front);
  front.classList.toggle('game-page__front');
  return front;
}

let getFrontCardImg = () => {
  let frontImg = document.createElement ('img');
  let cardRezult = getRandomInt(2);
  (cardRezult === 0) ? frontImg.src = 'img/gameOver.png':
  frontImg.src = 'img/Bug.png';
  getFrontCard().append(frontImg);
  frontImg.classList.toggle('rezult');
  return frontImg;
}

let getEasy = () => {
    createLine();
    for (let i = 0; i < 3; i++) {
      gameCards();
    }
};

let getNormal = () => {
      for (let k = 0; k < 2; k++) {
        getEasy();
      }
    };

let getHard = () => {
      for (let k = 0; k < 2; k++) {
          createLine();
          for (let i = 0; i < 5; i++) {
            gameCards();
          }
        }
      };

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let goAndAgain = () => {
  title.classList.toggle('choice_then');
  container.classList.toggle('choice_then');
}
