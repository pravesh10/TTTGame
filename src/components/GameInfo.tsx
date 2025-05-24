import  { motion } from 'framer-motion';
import { Info, RefreshCw, HelpCircle } from 'lucide-react';
import { GameState } from '../types'; 

interface GameInfoProps {
  gameState: GameState;
  onReset: () => void;
  onNewGame: () => void;
  onHelpToggle: () => void;
}

const GameInfo = ({ gameState, onReset, onNewGame, onHelpToggle }: GameInfoProps) => {
  const { currentPlayer, winner, player1Category, player2Category } = gameState;
  
   return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={onHelpToggle}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50"
          aria-label="Help"
        >
          <HelpCircle size={20} />
        </button>
        
        <h1 className="text-3xl font-bold text-center text-indigo-800">
          Blink Tac Toe
        </h1>
        
        <button 
          onClick={winner ? onNewGame : onReset}
          className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50"
          aria-label={winner ? "New Game" : "Reset Game"}
        >
          <RefreshCw size={20} />
        </button>
      </div>
      
      {gameState.gameStatus === 'playing' && !winner && (
        <div className="flex justify-center mb-6 space-x-6">
          <PlayerInfo 
            player={1}
            isActive={currentPlayer === 1}
            category={player1Category!}
          />
          <PlayerInfo 
            player={2}
            isActive={currentPlayer === 2}
            category={player2Category!}
          />
        </div>
      )}
      
      {winner && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center bg-indigo-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">
            Player {winner} Wins!
          </h2>
          <button
            onClick={onNewGame}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Play Again
          </button>
        </motion.div>
      )} 
    </div>
  );
};

interface PlayerInfoProps {
  player: number;
  isActive: boolean;
  category: { name: string; emojis: string[] };
}

const PlayerInfo = ({ player, isActive, category }: PlayerInfoProps) => {
  return (
    <div 
      className={`rounded-lg p-3 ${
        isActive 
          ? 'bg-indigo-100 border-2 border-indigo-300' 
          : 'bg-gray-100 border-2 border-transparent'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className={`font-bold ${isActive ? 'text-indigo-800' : 'text-gray-600'}`}>
          Player {player}
        </div>
        <div className="text-sm bg-white px-2 py-1 rounded">
          {category.name}
        </div>
      </div>
      <div className="flex mt-1 justify-center">
        {category.emojis.slice(0, 3).map((emoji, idx) => (
          <span key={idx} className="text-lg">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameInfo;
 