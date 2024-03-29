import { draw } from "./draw.js";
import { checkForDeath } from "./endGame.js";
import { update as updateFood } from "./food.js";
import { update as updateSnake, getSnakePosition, onSnake } from "./snake.js";
import "/music.js";
import "./keys.js";
import { GAME_SPEED } from "./constants.js";

export let isGameStarted = false;

const main = () => {
  update();
  draw();
  isGameStarted = true;
};

export const gameIntervelId = window.setInterval(main, 1000 / GAME_SPEED);

const update = () => {
  updateSnake();
  updateFood();
  checkForDeath();
};
