import { GAME_SIZE, GAME_SPEED } from "./index.js";
import { Obstacles } from "./obstacles.js";
import { Points } from "./points.js";
import { onSnake, expandSnake } from "./snake.js";

let foodPosition = {
  x: 7,
  y: 8,
};

let extraFoodPosition = {
  x: 9,
  y: 10,
};

export const getFoodPosition = () => foodPosition;
export const getExtraFoodPosition = () => extraFoodPosition;
export const setFoodPosition = (newFoodPosition) =>
  (foodPosition = { ...newFoodPosition });

export const setExtraFoodPosition = (newFoodPosition) =>
  (extraFoodPosition = { ...newFoodPosition });

export const update = () => {
  if (onSnake(getFoodPosition())) {
    Points.setPoints(Points.getPoints() + GAME_SPEED);
    expandSnake();
    respawnFood();
  }
  else if (onSnake(getExtraFoodPosition())) {
    Points.setPoints(Points.getPoints() + 4 * GAME_SPEED);
    expandSnake();
    respawnExtraFood();
  }
};

const respawnFood = () => {
  let newFoodPosition = null;
  while (newFoodPosition === null || onSnake(newFoodPosition) || Obstacles.onObstacle(newFoodPosition)) {
    const x = Math.floor(Math.random() * GAME_SIZE);
    const y = Math.floor(Math.random() * GAME_SIZE);
    newFoodPosition = { x, y };
  }

  setFoodPosition(newFoodPosition);
};

const respawnExtraFood = () => {
  let newExtraFoodPosition = null;
  while (newExtraFoodPosition === null || onSnake(newExtraFoodPosition) || Obstacles.onObstacle(newExtraFoodPosition)) {
    const x = Math.floor(Math.random() * GAME_SIZE);
    const y = Math.floor(Math.random() * GAME_SIZE);
    newExtraFoodPosition = { x, y };
  }

  setExtraFoodPosition(newExtraFoodPosition);
};
