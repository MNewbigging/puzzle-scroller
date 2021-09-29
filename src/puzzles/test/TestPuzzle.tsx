import React from 'react';

import { TestPuzzleState } from './TestPuzzleState';

import './test-puzzle.scss';

export class TestPuzzle extends React.Component {
  private readonly testState = new TestPuzzleState();

  public render() {
    return (
      <div className={'puzzle test-puzzle'}>
        <button onClick={this.testState.completePuzzle}>complete</button>
      </div>
    );
  }
}
