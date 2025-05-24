export  interface EmojiCategory {
  name: string;
  emojis: string[];
}

export interface EmojiPlacement {
  emoji: string;
  category: string;
  player: number;
  timestamp: number;
}

export interface GameState {
  board: (EmojiPlacement | null)[];
  currentPlayer: number;
  player1Category: EmojiCategory | null;
  player2Category: EmojiCategory | null;
  playerEmojis: {
    [key: number]: EmojiPlacement[];
  };
  gameStatus: 'category-selection' | 'playing' | 'won';
  winner: number | null;
  winningCombination: number[] | null;
}
 