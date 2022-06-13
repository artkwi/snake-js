import { GAME_SIZE } from "./index.js";
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
