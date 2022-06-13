import { getSnakePosition } from "./snake.js";

export let inputDirection = { x: -1, y: 0 };

document.addEventListener("keydown", (e) => {
  const key = e.key;
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
});

export const getInputDirection = () => inputDirection;
