import { Puzzle } from '../puzzles/common/PuzzleData';

export enum PuzzleEventType {
  COMPLETED = 'completed',
}

export type PuzzleEvent = { type: PuzzleEventType; puzzle: Puzzle };

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
