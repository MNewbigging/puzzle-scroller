import { observer } from 'mobx-react';
import React from 'react';

import './continue-button.scss';

interface Props {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

@observer
export class ContinueButton extends React.Component<Props> {
  public render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button className={'continue-button'} onClick={() => onClick()} disabled={disabled}>
        {text}
      </button>
    );
  }
}
