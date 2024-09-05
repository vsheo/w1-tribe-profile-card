// const expandButton = document.querySelector('header button')
// expandButton.addEventListener('click', expand)

// function expand () {
//   document.body.classList.toggle('expand')
// }

var card = document.querySelector('.card')
card.addEventListener('click', flip)

function flip () {
  card.classList.toggle('is-flipped')
};

