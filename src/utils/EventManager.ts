export enum PuzzleEvent {
  COMPLETED = 'completed',
}

type PuzzleEventListener = (puzzleEvent: PuzzleEvent) => void;

class EventManager {
  private listeners: PuzzleEventListener[] = [];

  public registerForPuzzleEvents(listener: PuzzleEventListener) {
    this.listeners.push(listener);
  }

  public firePuzzleEvent(event: PuzzleEvent) {
    this.listeners.forEach((listener) => listener(event));
  }
}

export const eventManager = new EventManager();
