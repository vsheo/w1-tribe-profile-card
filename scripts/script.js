// const expandButton = document.querySelector('header button')
// expandButton.addEventListener('click', expand)

// function expand () {
//   document.body.classList.toggle('expand')
// }

// flip profile image
// source: https://codepen.io/mondal10/pen/WNNEvjV
const flipImage = document.querySelector('header imageContainer')

flipImage.addEventListener('click', flipperClick)

function flipper () {
  card.classList.toggle('is-flipped');
}
