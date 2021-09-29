import { observer } from 'mobx-react';
import React from 'react';

import { allPuzzles } from './puzzles/common/AllPuzzles';
import { PuzzleWrapper } from './puzzles/common/PuzzleWrapper';
import { PuzzleScrollerState } from './PuzzleScrollerState';

import './puzzle-scroller-app.scss';

@observer
export class PuzzleScrollerApp extends React.Component {
  private readonly appState = new PuzzleScrollerState();

  public render() {
    // Only render the completed puzzles and current puzzle
    const puzzles: JSX.Element[] = [];
    for (let i = 0; i < this.appState.currentPuzzle; i++) {
      puzzles.push(<PuzzleWrapper key={`puzzle-${i}`}>{allPuzzles[i]}</PuzzleWrapper>);
    }

    return (
      <div id={'app-container'} className={'app-container'}>
        {puzzles}
      </div>
    );
  }
}
