import { draw } from "./draw.js";
import { update as updateFood } from "./food.js";
import { update as updateSnake, getSnakePosition, onSnake } from "./snake.js";

export const GAME_SIZE = 15;
export const GAME_SPEED = 4;

const main = () => {
  update();
  draw();
};

window.setInterval(main, 1000 / GAME_SPEED);

const update = () => {
  updateSnake();
  updateFood();
  checkForDeath();
};

const checkForDeath = () => {
  const snakePosition = getSnakePosition();
  const isHeadIsOnBody = onSnake(snakePosition[0], { withoutHead: true });
  if (isHeadIsOnBody) {
    console.log("koniec");
  }
};
