import { eventManager, PuzzleEvent } from '../../utils/EventManager';

export abstract class BasePuzzleState {
  public completed = false;

  public completePuzzle = () => {
    this.completed = true;
    eventManager.firePuzzleEvent(PuzzleEvent.COMPLETED);
  };
}
