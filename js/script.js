document.addEventListener('DOMContentLoaded', function () {
  let ul = this.querySelector('#start ul');

  for (let i = 0; i < 16; i++) {
    ul.innerHTML += `<li></li>`;
  }

  let cards = this.querySelectorAll('#start ul li');
  let coverSpan = this.querySelector('#start span');
  let endGame = this.querySelector('#end');
  let clicks = 1;
  let clickSpan = this.querySelector('#end span');

  randBomb(cards);

  for (const card of cards) {
    card.addEventListener('click', function () {
      if (this.classList.contains('bomb')) {
        bgImage(this, true);
        display(coverSpan, true);
        display(endGame, true);
        clickSpan.innerHTML = clicks;
      } else {
        bgImage(this, false);
        clicks++;
      }
    });
  }

  let newGame = this.querySelector('#end button');
  newGame.addEventListener('click', function () {
    location.reload();
  });
});

function randBomb(cards) {
  let num = Math.floor(Math.random() * 16);
  let bombCard = cards[num];
  bombCard.classList.add('bomb');
}

function display(element, condition) {
  if (condition) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function bgImage(element, condition) {
  if (condition) {
    element.style.backgroundImage = 'url(../images/bomb.png)';
  } else {
    element.style.backgroundImage = 'url(../images/rainbow.png)';
  }
}
