#  Blink Tac Toe

A twist on the classic Tic Tac Toe game with vanishing emojis.

## Features

- Play with emojis instead of X's and O's
- Select from 5 emoji categories
- "Vanishing emoji" rule - only 3 emojis per player allowed on the board
- Responsive design for both desktop and mobile
- Animated interface with Framer Motion

##  Tech Stack

- **React 18** with TypeScript for UI components
- **Tailwind CSS** for styling and responsive design
- **Framer Motion** for smooth animations and transitions
- **Vite** for fast development and optimized builds 

## How to Play

1. Each player selects an emoji category before starting
2. Players take turns placing emojis on the 3x3 grid
3. Each player can have only 3 emojis on the board at any time
4. When placing a 4th emoji, the oldest emoji disappears
5. Win by forming a line of 3 of your emojis horizontally, vertically, or diagonally

##  Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Local Development

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd blink-tac-toe
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
``` 

## Project Structure

```
blink-tac-toe/
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Board.tsx      # Game board component
│   │   ├── CategorySelector.tsx  # Emoji category selection
│   │   ├── GameInfo.tsx   # Game information and controls
│   │   ├── HelpModal.tsx  # Help modal with game rules
│   │   └── PlayerStats.tsx # Player statistics component
│   ├── assets/            # Images and other assets
│   ├── emojiCategories.ts # Emoji category definitions
│   ├── gameLogic.ts       # Game logic and state management
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
``` 
 