import React from 'react';

import './puzzle-wrapper.scss';

export class PuzzleWrapper extends React.Component {
  public render() {
    return <div className={'puzzle-wrapper'}>{this.props.children}</div>;
  }
}
