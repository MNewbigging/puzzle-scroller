import { observer } from 'mobx-react';
import React from 'react';

import { allPuzzles } from './puzzles/AllPuzzles';
import { PuzzleWrapper } from './puzzles/common/PuzzleWrapper';

import './puzzle-scroller-app.scss';
import { PuzzleScrollerState } from './PuzzleScrollerState';

@observer
export class PuzzleScrollerApp extends React.Component {
  private readonly appState = new PuzzleScrollerState();

  public render() {
    // Only render the completed puzzles and current puzzle
    const puzzles: JSX.Element[] = [];
    for (let i = 0; i < this.appState.currentPuzzle; i++) {
      puzzles.push(<PuzzleWrapper>{allPuzzles[i]}</PuzzleWrapper>);
    }

    return <div className={'app-container'}>{puzzles}</div>;
  }
}
