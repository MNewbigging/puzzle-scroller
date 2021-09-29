import React from 'react';

import { IntroPuzzle } from '../intro-puzzle/IntroPuzzle';
import { OutroPuzzle } from '../outro-puzzle/OutroPuzzle';
import { TestPuzzle } from '../test/TestPuzzle';

export const allPuzzles: JSX.Element[] = [<IntroPuzzle />, <TestPuzzle />, <OutroPuzzle />];
