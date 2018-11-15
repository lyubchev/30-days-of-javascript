handleKeyDown = e => {

  // get the correct audio file based on pressed key
  const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);

  // get the correct div element corresponding to the sound based on pressed key
  const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);

  if (audio && key) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    key.classList.add('rainbow-color');

    // listen for transionend so styles can be removed after the transition is done
    key.addEventListener('transitionend', () => key.classList.remove('playing'));
    key.addEventListener('animationend', () => key.classList.remove('rainbow-color'));
  }
};

window.addEventListener('keydown', handleKeyDown);