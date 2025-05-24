import  { useState, useEffect } from 'react';
import { initialGameState, makeMove, resetGame, selectCategory, startNewGame } from './gameLogic';
import  Board from './components/Board';
import CategorySelector from './components/CategorySelector';
import GameInfo from './components/GameInfo';
import HelpModal from './components/HelpModal';
import PlayerStats from './components/PlayerStats'; 
import { EmojiCategory, GameState } from './types'; 

function  App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [showHelp, setShowHelp] = useState(false);
  
  // Show help modal on first load
  useEffect(() => {
    // Check if this is the first time the user is visiting
    const hasVisited = localStorage.getItem('blinkTacToeVisited');
    if (!hasVisited) {
      setShowHelp(true);
      localStorage.setItem('blinkTacToeVisited', 'true');
    }
  }, []);
  
  const handleCategorySelect = (player: number, category: EmojiCategory) => {
    setGameState(currentState => selectCategory(currentState, player, category));
  };
  
  const handleCellClick = (cellIndex: number) => {
    setGameState(currentState => makeMove(currentState, cellIndex));
  };
  
  const handleReset = () => {
    setGameState(currentState => resetGame(currentState));
  };
  
  const handleNewGame = () => {
    setGameState(startNewGame());
  };
  
  const toggleHelp = () => {
    setShowHelp(current => !current);
  }; 
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <GameInfo 
          gameState={gameState}
          onReset={handleReset}
          onNewGame={handleNewGame}
          onHelpToggle={toggleHelp}
        />
        
        <main className="mt-6 flex flex-col items-center justify-center">
          {gameState.gameStatus === 'category-selection' && (
            <>
              {!gameState.player1Category && (
                <CategorySelector
                  player={1}
                  selectedCategory={gameState.player1Category}
                  onSelectCategory={(category) => handleCategorySelect(1, category)}
                />
              )}
              
              {gameState.player1Category && !gameState.player2Category && (
                <CategorySelector
                  player={2}
                  selectedCategory={gameState.player2Category}
                  onSelectCategory={(category) => handleCategorySelect(2, category)}
                />
              )}
            </>
          )}
          
                   {gameState.gameStatus !== 'category-selection' && (
            <>
              <Board 
                gameState={gameState}
                onCellClick={handleCellClick}
              />
              <PlayerStats gameState={gameState} />
            </>
          )} 
        </main>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© 2023 Blink Tac Toe - Built with React + TypeScript</p>
        </footer>
      </div>
      
      <HelpModal isOpen={showHelp} onClose={toggleHelp} />
    </div>
  );
}

export default App;
 