import { gameIntervelId, GAME_SIZE } from "./index.js";
import { Obstacles } from "./obstacles.js";
import { getSnakePosition, onSnake } from "./snake.js";

const restartGame = () => {
  clearInterval(gameIntervelId);
  window.location.reload();
};

export const checkForDeath = () => {
  const snakePosition = getSnakePosition();
  const isHeadIsOnBody = onSnake(snakePosition[0], { withoutHead: true });
  const isHeadOnObstacle = Obstacles.onObstacle(snakePosition[0], { withoutHead: true });
  const isSnakeOutsideGame =
    snakePosition[0].x < 0 ||
    snakePosition[0].y < 0 ||
    snakePosition[0].x >= GAME_SIZE ||
    snakePosition[0].y >= GAME_SIZE;
  if (isHeadIsOnBody || isSnakeOutsideGame || isHeadOnObstacle) {
    confirm("Koniec gry", restartGame());
  }
};