import { observer } from 'mobx-react';
import React from 'react';

import { BasePuzzleState } from '../common/BasePuzzleState';
import { ChangingPasswordState } from './ChangingPasswordState';
import { ContinueButton } from '../common/components/ContinueButton';

import './changing-password.scss';
@observer
export class ChangingPassword extends React.Component {
  private puzzleState: ChangingPasswordState | undefined = new ChangingPasswordState();
  private readonly baseState = new BasePuzzleState({ name: 'changing-password' });

  public render() {
    return (
      <div className={'changing-password'}>
        <div className={'text-area'}>
          <div className={'hidden-text'}>the</div>
          <div className={'hidden-text'}>password</div>
          <div className={'hidden-text'}>is</div>
          <div className={'hidden-text'}>{this.puzzleState.currentPassword}</div>
        </div>
        <div className={'answer-area'}>
          <input
            className={'password-input'}
            type={'text'}
            placeholder={'password'}
            value={this.puzzleState.passwordInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.puzzleState.setPassword(e.target.value)
            }
          />

          <ContinueButton
            text={'Continue'}
            onClick={this.onContinue}
            disabled={this.puzzleState.disableContinue()}
          />
        </div>
      </div>
    );
  }

  private onContinue = () => {
    this.puzzleState.confirmPassword();

    // Reached last password
    if (this.puzzleState.completed) {
      this.puzzleState = undefined;
      this.baseState.completePuzzle();
    }
  };
}
