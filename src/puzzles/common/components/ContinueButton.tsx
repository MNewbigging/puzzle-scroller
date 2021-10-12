import { observer } from 'mobx-react';
import React from 'react';

import './continue-button.scss';

interface Props {
  text: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

@observer
export class ContinueButton extends React.Component<Props> {
  public render() {
    const { text, onClick, disabled, className } = this.props;

    return (
      <button
        className={'continue-button ' + className}
        onClick={() => onClick()}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
