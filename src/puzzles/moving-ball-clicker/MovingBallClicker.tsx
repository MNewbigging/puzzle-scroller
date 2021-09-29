import { observer } from 'mobx-react';
import React from 'react';

import './moving-ball-clicker.scss';

@observer
export class MovingBallClicker extends React.Component {
  public render() {
    return (
      <div className={'moving-ball-clicker'}>
        <div className={'text'}>Click the red balls to continue!</div>
        <div></div>
        <button className={'standard-button'}>Continue</button>
      </div>
    );
  }
}
