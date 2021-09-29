import { action, observable } from 'mobx';
import { Puzzle } from './puzzles/common/PuzzleData';

import { eventManager, PuzzleEvent, PuzzleEventType } from './utils/EventManager';

export class PuzzleScrollerState {
  @observable public currentPuzzle = 1;
  public completedPuzzles: Puzzle[] = [];

  constructor() {
    eventManager.registerForPuzzleEvents(this.onPuzzleEvent);
  }

  private readonly onPuzzleEvent = (event: PuzzleEvent) => {
    switch (event.type) {
      case PuzzleEventType.COMPLETED:
        this.onCompletePuzzle(event.puzzle);
        break;
    }
  };

  @action private onCompletePuzzle(puzzle: Puzzle) {
    // Has this been completed?
    const completed = this.completedPuzzles.find((p) => p.name === puzzle.name);
    if (!completed) {
      this.completePuzzle(puzzle);
    }

    // Always scroll down to bottom after v brief delay
    setTimeout(this.scrollDown, 100);
  }

  @action private completePuzzle(puzzle: Puzzle) {
    this.completedPuzzles.push(puzzle);
    this.currentPuzzle++;
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
