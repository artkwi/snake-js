window.addEventListener('keyup', arrowUp)
window.addEventListener('keydown', arrowDown)

function arrowDown(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  key.classList.add('press')
}
function arrowUp(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
   key.classList.remove('press')
}