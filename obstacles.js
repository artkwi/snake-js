let obstaclePositions = [
  { x: 2, y: 3 },
  { x: 2, y: 4 },
  { x: 2, y: 5 },
]

export class Obstacles {
  static #obstacles = obstaclePositions;

  static getObstacles() {
    return this.#obstacles;
  }

  static setObstacles(obstacles) {
    this.#obstacles = obstacles;
  }

  static onObstacle = (element) => {
    const obstaclesPosition = this.getObstacles();
    if (
      obstaclesPosition.some(
        (segment) => segment.x === element.x && segment.y === element.y
      )
    ) {
      return true;
    }
    return false;
  };
}