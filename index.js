import { draw } from "./draw.js";
import { checkForDeath } from "./endGame.js";
import { update as updateFood } from "./food.js";
import { update as updateSnake, getSnakePosition, onSnake } from "./snake.js";
import '/music.js';

export const GAME_SIZE = 11;
export const GAME_SPEED = 4;

export let isGameStarted = false;

const main = () => {
  update();
  draw();
  isGameStarted = true;
};

window.setInterval(main, 1000 / GAME_SPEED);

const update = () => {
  updateSnake();
  updateFood();
  // checkForDeath();
};
