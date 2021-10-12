import React from 'react';
import { ChangingPassword } from '../changing-password/ChangingPassword';

import { IntroPuzzle } from '../intro-puzzle/IntroPuzzle';
import { MovingBallClicker } from '../moving-ball-clicker/MovingBallClicker';
import { OutroPuzzle } from '../outro-puzzle/OutroPuzzle';

export const allPuzzles: JSX.Element[] = [
  <IntroPuzzle />,
  <ChangingPassword />,
  <MovingBallClicker />,
  <OutroPuzzle />,
];
