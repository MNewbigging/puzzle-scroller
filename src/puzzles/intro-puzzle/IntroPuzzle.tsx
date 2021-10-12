import { observer } from 'mobx-react';
import React from 'react';

import { BasePuzzleState } from '../common/BasePuzzleState';
import { ContinueButton } from '../common/components/ContinueButton';

import './intro-puzzle.scss';

@observer
export class IntroPuzzle extends React.Component {
  private readonly puzzleState = new BasePuzzleState({ name: 'Intro' });

  public render() {
    return (
      <div className={'intro-puzzle'}>
        <p>Welcome to the funtime puzzle scroller!</p>
        <p>The aim of the game is simple:</p>
        <ul>
          <li>Each screen has a puzzle, challenge or task to complete</li>
          <li>Completing one lets you scroll down to the next</li>
          <li>Can you reach the end?!</li>
        </ul>

        <ContinueButton
          text={"Let's go!"}
          onClick={this.puzzleState.completePuzzle}
          disabled={false}
        />
      </div>
    );
  }
}
