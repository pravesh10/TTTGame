import  { motion } from 'framer-motion';
import { GameState } from '../types';

interface BoardProps {
  gameState: GameState;
  onCellClick: (index: number) => void;
}

const Board = ({ gameState, onCellClick }: BoardProps) => {
  const { board, winningCombination, currentPlayer } = gameState;
  
  return (
    <div className="flex flex-col items-center w-full">
      <div className="game-grid">
        {board.map((cell, index) => {
          const isWinningCell = winningCombination?.includes(index);
          
          return (
            <motion.div
              key={index}
              className={`emoji-cell bg-white border border-gray-200 ${isWinningCell ? 'winning-cell' : ''}`}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCellClick(index)}
            >
                         {cell && (
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="placed"
              >
                {cell.emoji}
              </motion.span>
            )} 
            </motion.div>
          );
        })}
      </div>
      
      {gameState.gameStatus === 'playing' && !gameState.winner && (
        <div className="mt-4 text-center">
          <p className="text-lg font-medium">
            Player {currentPlayer}'s turn
            <span className="ml-2 text-xl">
              {currentPlayer === 1 
                ? gameState.player1Category?.emojis[Math.floor(Math.random() * gameState.player1Category.emojis.length)]
                : gameState.player2Category?.emojis[Math.floor(Math.random() * gameState.player2Category.emojis.length)]
              }
            </span>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Click any empty cell to place your emoji
          </p>
        </div>
      )}
    </div>
  );
};

export default Board; 
 