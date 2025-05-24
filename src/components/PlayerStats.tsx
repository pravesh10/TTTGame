import  { motion } from 'framer-motion';
import { GameState } from '../types';

interface PlayerStatsProps {
  gameState: GameState;
}

const PlayerStats = ({ gameState }: PlayerStatsProps) => {
  const { playerEmojis, player1Category, player2Category } = gameState;
  
  if (!player1Category || !player2Category) {
    return null;
  }
  
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 grid grid-cols-2 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-center mb-2">Player 1</h3>
        <div className="text-center mb-2">
          <span className="text-sm bg-indigo-100 px-2 py-1 rounded">
            {player1Category.name}
          </span>
        </div>
        <div className="flex justify-center space-x-2">
          {playerEmojis[1].map((placement, idx) => (
            <motion.div 
              key={idx} 
              className="text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {placement.emoji}
            </motion.div>
          ))}
          {Array(3 - playerEmojis[1].length).fill(null).map((_, idx) => (
            <div key={`empty-${idx}`} className="w-8 h-8 rounded-full bg-gray-100"></div>
          ))}
        </div>
        {playerEmojis[1].length === 3 && (
          <p className="text-xs text-center mt-2 text-orange-600">
            Next placement will remove oldest emoji!
          </p>
        )}
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-center mb-2">Player 2</h3>
        <div className="text-center mb-2">
          <span className="text-sm bg-indigo-100 px-2 py-1 rounded">
            {player2Category.name}
          </span>
        </div>
        <div className="flex justify-center space-x-2">
          {playerEmojis[2].map((placement, idx) => (
            <motion.div 
              key={idx} 
              className="text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {placement.emoji}
            </motion.div>
          ))}
          {Array(3 - playerEmojis[2].length).fill(null).map((_, idx) => (
            <div key={`empty-${idx}`} className="w-8 h-8 rounded-full bg-gray-100"></div>
          ))}
        </div>
        {playerEmojis[2].length === 3 && (
          <p className="text-xs text-center mt-2 text-orange-600">
            Next placement will remove oldest emoji!
          </p>
        )}
      </div>
    </div>
  );
};

export default PlayerStats;
 