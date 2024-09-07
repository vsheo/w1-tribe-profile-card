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



// var card_b = document.querySelector('.card')
// card_b.addEventListener('click', flip_b)

// function flip_b () {
//   card.classList.replace(" card is-flipped", ".card")
// };