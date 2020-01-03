const start = document.querySelector('#btn__reset');
const game = new Game;

start.addEventListener('click', function() {
  game.startGame();
} )

const key = document.querySelector('#qwerty');

// listens for clicks on the keys, but does not capture clicks on the surrounding whitespace
key.addEventListener('click', function() {
  // the below code was found here: https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  game.handleInteraction(event.target);
})



