const playButtonMusic = document.getElementById("play-music-button");
const playerElement = document.getElementById("player");

const playMusic = () => {
  if (playerElement.paused) {
    playerElement.play();
    playButtonMusic.textContent = "Pause music (M)";
  } else {
    playerElement.pause();
    playButtonMusic.textContent = "Play music (M)";
  }
};

playButtonMusic.addEventListener("click", playMusic);

document.addEventListener("keydown", (e) => {
  if (e.key == "m") {
    playMusic();
  }
});
