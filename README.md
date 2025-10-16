# **React Tic-Tac-Toe Game**

A simple Tic-Tac-Toe game built with React, demonstrating core React concepts including component composition, state management, and event handling.

**Features**

- Classic Tic-Tac-Toe gameplay between two players (X and O).
- Game history with the ability to jump to previous moves.
- Display of the current player or the winner.
- Interactive board with clickable squares.
- Minimal and clean UI.

**Getting Started**
*Prerequisites*
Make sure you have Node.js and npm installed. You can download them from https://nodejs.org/


**Installation**
1. Clone the repository or copy the source code.
2. Navigate to the project directory.
3. Install dependencies:
```npm install```
4. Run the app locally:
```npm start```

The app should open automatically in your browser at http://localhost:3000.

**Project Structure**
- App.js — Main React component with Game, Board, and Square components.
- App.css — Basic styling for the game board and controls.
- Game state is managed using React’s useState hook.
- The calculateWinner function checks the board to determine the winner.

**Usage**
- Click on any empty square to place your mark (X or O).
- The game automatically switches turns.
- The status message shows the next player or the winner.
- Use the move list to jump back to any previous state of the game.

**Future Improvements**
- Highlight the winning line.
- Add restart button.
- Implement AI for single-player mode.
- Enhance mobile responsiveness.