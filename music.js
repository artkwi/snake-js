const playButtonMusic = document.getElementById('play-music-button');
const playerElement = document.getElementById('player');

playButtonMusic.addEventListener('click', (e) => {
  if (playerElement.paused) {
    playerElement.play();
    playButtonMusic.textContent = 'Pause music';
  } else {
    playerElement.pause();
    playButtonMusic.textContent = 'Play music';
  }
})