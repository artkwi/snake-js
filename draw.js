import { getSnakePosition } from "./snake.js";
import { getFoodPosition } from "./food.js";
import { GAME_SIZE } from "./index.js";

export const draw = () => {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";

  gameBoard.style.gridTemplateColumns = `repeat(${GAME_SIZE}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${GAME_SIZE}, 1fr)`;

  for (let i = 0; i < GAME_SIZE; i++) {
    for (let j = 0; j < GAME_SIZE; j++) {
      const boardElement = document.createElement("div");
      boardElement.classList.add("board-element", `board-element-${i}-${j}`);
      gameBoard.appendChild(boardElement);
    }
  }

  getSnakePosition().map(({ x, y }) => {
    const bodyElements = document.getElementsByClassName(
      `board-element-${x}-${y}`
    );
    bodyElements[0].classList.add("body-segment");
  });

  const { x, y } = getFoodPosition();
  const bodyElements = document.getElementsByClassName(
    `board-element-${x}-${y}`
  );
  bodyElements[0].classList.add("food-segment");
};
