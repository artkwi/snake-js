import { GAME_SIZE, GAME_SPEED } from "./index.js";
import { Points } from "./points.js";
import { onSnake, expandSnake } from "./snake.js";

let foodPosition = {
  x: 7,
  y: 8,
};

export const getFoodPosition = () => foodPosition;
export const setFoodPosition = (newFoodPosition) =>
  (foodPosition = { ...newFoodPosition });

export const update = () => {
  if (onSnake(getFoodPosition())) {
    Points.setPoints(Points.getPoints() + GAME_SPEED);
    expandSnake();
    respawnFood();
  }
};

const respawnFood = () => {
  let newFoodPosition = null;
  while (newFoodPosition === null || onSnake(newFoodPosition)) {
    const x = Math.floor(Math.random() * GAME_SIZE);
    const y = Math.floor(Math.random() * GAME_SIZE);
    newFoodPosition = { x, y };
  }

  setFoodPosition(newFoodPosition);
};
