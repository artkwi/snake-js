import { getSnakePosition } from "./snake.js";

export let inputDirection = { x: -1, y: 0 };

const setDirection = (key) => {
  switch (key) {
    case "ArrowLeft":
      if (getInputDirection().y === 0) {
        inputDirection = { x: 0, y: -1 };
      }
      break;
    case "ArrowRight":
      if (getInputDirection().y === 0) {
        inputDirection = { x: 0, y: 1 };
      }
      break;
    case "ArrowUp":
      if (getInputDirection().x === 0) {
        inputDirection = { x: -1, y: 0 };
      }
      break;
    case "ArrowDown":
      if (getInputDirection().x === 0) {
        inputDirection = { x: 1, y: 0 };
      }
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key;
  setDirection(key);
});

export const getInputDirection = () => inputDirection;

addEventListener('click',(e) => {
  const keyNumber = e.target.getAttribute("data-key");
  let keyName = null;

  if (keyNumber) {
    switch (Number(keyNumber)) {
      case 37:
        keyName = "ArrowLeft";
        break;
      case 39:
        keyName = "ArrowRight";
        break;
      case 38:
        keyName = "ArrowUp";
        break;
      case 40:
        keyName = "ArrowDown";
        break;
    
      default:
        break;
    }
    
    if (keyName) {
      setDirection(keyName);
    }
  }
} )