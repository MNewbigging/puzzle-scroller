import { observer } from 'mobx-react';
import React from 'react';
import { BasePuzzleState } from '../common/BasePuzzleState';

import './changing-password.scss';

@observer
export class ChangingPassword extends React.Component {
  private readonly baseState = new BasePuzzleState({ name: 'changing-password' });

  public render() {
    return <div className={'changing-password'}></div>;
  }
}
