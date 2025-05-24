import  { GameState, EmojiPlacement, EmojiCategory } from './types';
import { getRandomEmoji } from './emojiCategories';

export const initialGameState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 1,
  player1Category: null,
  player2Category: null,
  playerEmojis: {
    1: [],
    2: []
  },
  gameStatus: 'category-selection',
  winner: null,
  winningCombination: null
};

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const selectCategory = (state: GameState, player: number, category: EmojiCategory): GameState => {
  const newState = { ...state };
  
  if (player === 1) {
    newState.player1Category = category;
  } else {
    newState.player2Category = category;
  }
  
  if (newState.player1Category && newState.player2Category) {
    newState.gameStatus = 'playing';
  }
  
  return newState;
};

export  const makeMove = (state: GameState, cellIndex: number): GameState => {
  if (
    state.gameStatus !== 'playing' ||
    state.board[cellIndex] !== null ||
    state.winner !== null
  ) {
    return state;
  }
  
  const currentCategory = state.currentPlayer === 1 
    ? state.player1Category! 
    : state.player2Category!;
    
  const newEmoji: EmojiPlacement = {
    emoji: getRandomEmoji(currentCategory),
    category: currentCategory.name,
    player: state.currentPlayer,
    timestamp: Date.now()
  };
  
  const playerEmojis = [...state.playerEmojis[state.currentPlayer], newEmoji];
  
  let newBoard = [...state.board];
  newBoard[cellIndex] = newEmoji;
  
  // Apply vanishing rule
  if (playerEmojis.length > 3) {
    const oldestEmoji = playerEmojis[0];
    const oldestIndex = state.board.findIndex(
      cell => cell && cell.timestamp === oldestEmoji.timestamp
    );
    
    // Don't allow placing on the same spot as the vanished emoji
    if (oldestIndex === cellIndex) {
      return state;
    }
    
    newBoard[oldestIndex] = null;
    playerEmojis.shift();
  }
  
  const newState = {
    ...state,
    board: newBoard,
    playerEmojis: {
      ...state.playerEmojis,
      [state.currentPlayer]: playerEmojis
    },
    currentPlayer: state.currentPlayer === 1 ? 2 : 1
  };
  
  // Check for win
  const winResult = checkWin(newState);
  if (winResult) {
    return {
      ...newState,
      gameStatus: 'won',
      winner: winResult.winner,
      winningCombination: winResult.combination
    };
  }
  
  return newState;
}; 

export const checkWin = (state: GameState): { winner: number; combination: number[] } | null => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const cellA = state.board[a];
    const cellB = state.board[b];
    const cellC = state.board[c];
    
    if (
      cellA && cellB && cellC &&
      cellA.player === cellB.player &&
      cellB.player === cellC.player
    ) {
      return {
        winner: cellA.player,
        combination
      };
    }
  }
  
  return null;
};

export const resetGame = (state: GameState): GameState => {
  return {
    ...initialGameState,
    player1Category: state.player1Category,
    player2Category: state.player2Category,
    gameStatus: 'playing'
  };
};

export const startNewGame = (): GameState => {
  return { ...initialGameState };
};
 