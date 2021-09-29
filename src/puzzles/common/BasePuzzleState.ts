import { observable } from 'mobx';
import { eventManager, PuzzleEvent, PuzzleEventType } from '../../utils/EventManager';
import { Puzzle } from './PuzzleData';

export class BasePuzzleState {
  @observable public completed = false;
  public puzzle: Puzzle;

  constructor(puzzle: Puzzle) {
    this.puzzle = puzzle;
  }

  public isCompleted = () => {
    return this.completed;
  };

  public completePuzzle = () => {
    this.completed = true;

    const puzzleEvent: PuzzleEvent = {
      type: PuzzleEventType.COMPLETED,
      puzzle: this.puzzle,
    };

    eventManager.firePuzzleEvent(puzzleEvent);
  };
}
