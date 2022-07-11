import { getSnakePosition } from "./snake.js";
import { getFoodPosition } from "./food.js";
import { GAME_SIZE, isGameStarted } from "./index.js";

export const draw = () => {
  if (!isGameStarted) {
    initialBoardDraw();
  } else {
    laterBoardDraw();
  }

  // wynik
  const x = document.getElementById("x");
  const y = document.getElementById("y");

  x.textContent = getSnakePosition()[0].x;
  y.textContent = getSnakePosition()[0].y;

  // end wynik

  getSnakePosition().map(({ x, y }, i) => {
    const bodyElements = document.getElementsByClassName(
      `board-element-${x}-${y}`
    );
    if (bodyElements.length) {
      if (i === 0) {
        bodyElements?.[0].classList?.add("body-segment--head");
      }
      bodyElements?.[0].classList?.add("body-segment");
    }
  });

  drawFood();
};

const initialBoardDraw = () => {
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
};

const laterBoardDraw = () => {
  for (let i = 0; i < GAME_SIZE; i++) {
    for (let j = 0; j < GAME_SIZE; j++) {
      const boardElement = document.getElementsByClassName(
        `board-element-${i}-${j}`
      );
      boardElement[0].classList.remove(
        `body-segment`,
        `food-segment`,
        `body-segment--head`
      );
    }
  }
};

const drawFood = () => {
  const { x, y } = getFoodPosition();
  const bodyElements = document.getElementsByClassName(
    `board-element-${x}-${y}`
  );

  bodyElements[0].classList.add("food-segment");
};
