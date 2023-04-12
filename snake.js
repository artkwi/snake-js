import { GAME_SIZE } from "./constants.js";
import { getInputDirection, setLastSnakeDirection } from "./input.js";

const initSnakePosition = () => {
  return [
    { x: GAME_SIZE - 3, y: GAME_SIZE - 1 },
    { x: GAME_SIZE - 2, y: GAME_SIZE - 1 },
    { x: GAME_SIZE - 1, y: GAME_SIZE - 1 },
  ];
};

let snakePosition = initSnakePosition();

export const getSnakePosition = () => snakePosition;
export const setSnakePosition = (newSnakePosition) =>
  (snakePosition = [...newSnakePosition]);

export const update = () => {
  let currentSnakePosition = [...getSnakePosition()];

  const inputDirection = getInputDirection();

  for (let i = currentSnakePosition.length - 2; i >= 0; i--) {
    currentSnakePosition[i + 1] = { ...currentSnakePosition[i] };
  }

  currentSnakePosition = currentSnakePosition.slice(1);

  const newHeadPosition = {
    x: currentSnakePosition[0].x + inputDirection.x,
    y: currentSnakePosition[0].y + inputDirection.y,
  };

  setSnakePosition([newHeadPosition, ...currentSnakePosition]);
  setLastSnakeDirection(inputDirection);
};

export const onSnake = (element, options) => {
  if (!element) {
    return false;
  }
  const snakePosition = options?.withoutHead
    ? [...getSnakePosition()].slice(1)
    : getSnakePosition();
  if (
    snakePosition.some(
      (segment) => segment.x === element.x && segment.y === element.y
    )
  ) {
    return true;
  }
  return false;
};

export const expandSnake = () => {
  const snakePosition = getSnakePosition();
  snakePosition[snakePosition.length] = snakePosition[snakePosition.length - 1];
  setSnakePosition(snakePosition);
};
