import { observer } from 'mobx-react';
import React from 'react';

import { MovingBallClickerState } from './MovingBallClickerState';
import { BasePuzzleState } from '../common/BasePuzzleState';
import { ContinueButton } from '../common/components/ContinueButton';

import './moving-ball-clicker.scss';
@observer
export class MovingBallClicker extends React.Component {
  private puzzleState: MovingBallClickerState | undefined = new MovingBallClickerState();
  private readonly baseState = new BasePuzzleState({ name: 'moving-ball-clicker' });

  componentDidMount() {
    this.puzzleState.setupBalls();
  }

  public render() {
    return (
      <div className={'moving-ball-clicker'}>
        <div className={'text'}>Click all the red balls to continue! {this.renderTracker()}</div>
        <div id={'ball-park'} className={'ball-park'}>
          {this.puzzleState && this.addBalls()}
        </div>

        <ContinueButton
          text={'Continue'}
          onClick={this.onContinue}
          disabled={this.disableContinue()}
          className={'mb-continue-button'}
        />
      </div>
    );
  }

  private renderTracker() {
    if (!this.puzzleState) {
      return <></>;
    }

    return (
      <span>
        {this.puzzleState.clickedRedBalls}/{this.puzzleState.totalRedBalls}
      </span>
    );
  }

  private addBalls() {
    return this.puzzleState.balls.map((ball) => (
      <div
        key={ball.id}
        className={['ball', ball.colour, ball.state].join(' ')}
        style={{
          width: `${ball.size}px`,
          height: `${ball.size}px`,
          top: `${ball.yOffset}px`,
          left: `${ball.xOffset}px`,
          animationDuration: `${ball.speed}s`,
        }}
        onClick={() => this.puzzleState.clickBall(ball)}
      ></div>
    ));
  }

  private disableContinue() {
    return !this.puzzleState?.gameOver ?? false;
  }

  private onContinue = () => {
    this.puzzleState = undefined;
    this.baseState.completePuzzle();
  };
}
