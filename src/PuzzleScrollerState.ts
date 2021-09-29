import { action, observable } from 'mobx';
import { allPuzzles } from './puzzles/AllPuzzles';
import { eventManager, PuzzleEvent } from './utils/EventManager';

export class PuzzleScrollerState {
  @observable public currentPuzzle = 1;
  public readonly maxPuzzles = allPuzzles.length;

  constructor() {
    eventManager.registerForPuzzleEvents(this.onPuzzleEvent);
  }

  private readonly onPuzzleEvent = (event: PuzzleEvent) => {
    switch (event) {
      case PuzzleEvent.COMPLETED:
        this.onCompletePuzzle();
        break;
    }
  };

  @action private onCompletePuzzle() {
    this.currentPuzzle++;
  }
}
