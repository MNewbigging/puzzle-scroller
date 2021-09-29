import { observable } from 'mobx';
import { eventManager, PuzzleEvent } from '../../utils/EventManager';

export class BasePuzzleState {
  @observable public completed = false;

  public isCompleted = () => {
    return this.completed;
  };

  public completePuzzle = () => {
    this.completed = true;
    eventManager.firePuzzleEvent(PuzzleEvent.COMPLETED);
  };
}
