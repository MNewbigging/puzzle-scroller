import { action, observable } from 'mobx';
import { Colour, ColourUtils } from '../../utils/Colours';
import { RandomUtils } from '../../utils/RandomUtils';

export enum MovingBallState {
  MOVING = 'moving',
  EXIT = 'exit',
}

export interface MovingBall {
  id: string;
  colour: Colour;
  size: number;
  yOffset: number;
  xOffset: number;
  speed: number;
  state: MovingBallState;
}

export class MovingBallClickerState {
  @observable public balls: MovingBall[] = [];
  @observable public clickedRedBalls = 0;
  @observable public gameOver = false;
  public totalRedBalls = 5;

  public setupBalls() {
    // Props for balls
    const nonRedBalls = 10;
    const minBallSize = 20;
    const maxBallSize = 80;

    // Pos offsets based on size of ball park
    const ballPark = document.getElementById('ball-park');

    const ballParkHeight = ballPark.clientHeight;
    const minYOffset = minBallSize * 2;
    const maxYOffset = ballParkHeight - minYOffset;

    const ballParkWidth = ballPark.clientWidth;
    const minXOffset = minYOffset;
    const maxXOffset = ballParkWidth - minXOffset;

    const minSpeed = 12;
    const maxSpeed = 24;

    // Add  red balls
    for (let i = 0; i < this.totalRedBalls; i++) {
      this.balls.push({
        id: RandomUtils.getRandomId(4),
        colour: Colour.RED,
        size: RandomUtils.getRandomRange(minBallSize, maxBallSize),
        yOffset: RandomUtils.getRandomRange(minYOffset, maxYOffset),
        xOffset: RandomUtils.getRandomRange(minXOffset, maxXOffset),
        speed: RandomUtils.getRandomRangeFloat(minSpeed, maxSpeed),
        state: MovingBallState.MOVING,
      });
    }

    // Then add a bunch of non-red balls
    for (let i = 0; i < nonRedBalls; i++) {
      this.balls.push({
        id: RandomUtils.getRandomId(4),
        colour: ColourUtils.getRandomColourExclude(Colour.RED),
        size: RandomUtils.getRandomRange(minBallSize, maxBallSize),
        yOffset: RandomUtils.getRandomRange(minYOffset, maxYOffset),
        xOffset: RandomUtils.getRandomRange(minXOffset, maxXOffset),
        speed: RandomUtils.getRandomRangeFloat(minSpeed, maxSpeed),
        state: MovingBallState.MOVING,
      });
    }
  }

  @action public clickBall(ball: MovingBall) {
    // Was this ball red?
    if (ball.colour !== Colour.RED) {
      return;
    }

    // It was red, remove it
    this.balls = this.balls.filter((b) => b.id !== ball.id);
    this.clickedRedBalls++;

    // Check for end game
    this.checkEndGame();
  }

  @action private checkEndGame() {
    if (this.clickedRedBalls !== this.totalRedBalls) {
      return;
    }

    // Game over; let balls animate out then flip gameOver bool
    this.balls.forEach((b) => (b.state = MovingBallState.EXIT));

    setTimeout(() => (this.gameOver = true), 250);
  }
}
