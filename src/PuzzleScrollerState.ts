import { action, observable } from 'mobx';
import { allPuzzles } from './puzzles/common/AllPuzzles';
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
    // Add another puzzle
    this.currentPuzzle++;

    // Once added, scroll down to new puzzle after v brief delay
    setTimeout(this.scrollDown, 100);
  }

  private scrollDown = () => {
    // Get a ref to the app container to scroll
    const appContainer = document.getElementById('app-container');

    // Scroll it by container height, smoothly
    // Note: this will always scroll to bottom of page
    window.scrollBy({
      top: appContainer.clientHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
}
