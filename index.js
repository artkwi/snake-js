import { draw } from "./draw.js";
import { update as updateFood } from "./food.js";
import { update as updateSnake, getSnakePosition, onSnake } from "./snake.js";

export const GAME_SIZE = 11;
export const GAME_SPEED = 4;

export let isGameStarted = false;
export let points

const main = () => {
  update();
  draw();
  isGameStarted = true;
};

window.setInterval(main, 1000 / GAME_SPEED);

const update = () => {
  updateSnake();
  updateFood();
  checkForDeath();
};

const restartGame = () => {
  window.location = "/";
};

const checkForDeath = () => {
  const snakePosition = getSnakePosition();
  const isHeadIsOnBody = onSnake(snakePosition[0], { withoutHead: true });
  const isSnakeOutsideGame =
    snakePosition[0].x < 0 ||
    snakePosition[0].y < 0 ||
    snakePosition[0].x >= GAME_SIZE ||
    snakePosition[0].y >= GAME_SIZE;
  if (isHeadIsOnBody || isSnakeOutsideGame) {
    // confirm("Koniec gry.", restartGame());
  }
};
