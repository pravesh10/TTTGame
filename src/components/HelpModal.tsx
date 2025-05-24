import  { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="help-content max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-800">How to Play</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
                       <div className="space-y-4">
              <section>
                <h3 className="text-lg font-semibold mb-2">Game Setup</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Each player selects an emoji category before starting</li>
                  <li>The game is played on a 3x3 grid like regular Tic Tac Toe</li>
                  <li>Player 1 goes first, followed by Player 2, alternating turns</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">Emoji Assignment</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>On your turn, you'll be assigned a random emoji from your chosen category</li>
                  <li>Place your emoji on any empty cell on the board</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">The Vanishing Rule</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Each player can have a maximum of 3 emojis on the board</li>
                  <li>When placing a 4th emoji, your oldest emoji disappears (First In, First Out)</li>
                  <li>You cannot place your 4th emoji where your 1st emoji was located</li>
                  <li>The vanished cell becomes empty and available for either player</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">Winning the Game</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Win by forming a horizontal, vertical, or diagonal line of 3 of your emojis</li>
                  <li>Draws are not possible due to the vanishing rule</li>
                  <li>After winning, you can choose to play again</li>
                </ul>
              </section>

              <div className="mt-6 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="text-lg font-semibold mb-1 text-indigo-800">Quick Tips:</h3>
                <ul className="list-disc pl-5 space-y-1 text-indigo-700">
                  <li>Think strategically about which cells to place your emojis</li>
                  <li>Keep track of which emoji will vanish next</li>
                  <li>Try to block your opponent's potential winning lines</li>
                  <li>Use the vanishing rule to your advantage!</li>
                </ul>
              </div>
            </div> 
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpModal;
 