import React from 'react';

import './outro-puzzle.scss';

export class OutroPuzzle extends React.Component {
  public render() {
    return (
      <div className={'outro-puzzle'}>
        <p>You did it!</p>
        <p>Well done, you finished the funtime puzzle scroller.</p>
        <p>Check back soon for more puzzles!</p>
      </div>
    );
  }
}
