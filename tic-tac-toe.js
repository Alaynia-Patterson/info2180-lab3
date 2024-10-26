document.addEventListener('DOMContentLoaded', () => {

    //Select all div elements in #board
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Begin with player 'X'
    const gameState = Array(9).fill(null); // Keep track of the board
    const statusDiv = document.getElementById('status');


    // Game winning patterns
    const winningpatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];

    // Handle square click
    function handleSquareClick(event){
        const square = event.target;
        const index = Array.from(squares).indexOf(squares);

        //Does nothing if the token is already taken
        if (gameState[index] !== null ||statusDiv.classList.contains('you-won')){
            return;
        }

        //Update the game state and the UI
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        //See if the current player won
        if(checkWinner (currentPlayer)){
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add('you-won');
        } else {
            //Alternate the current player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }


    // This function checks if the current player won
    function checkWinner(player) {
        return winningpatterns.some(patterns => {
          return patterns.every(index => gameState[index] === player);
        });
    }

        

    // Handle mouse over a square
    function handleMouseOver(event) {
        const square = event. target;
        square.classList.add('hover');
    }

    // Handle mouse out of a square
    function handleMouseOut(event) {
        const square = event.target;
        square.classList.remove('hover');
    }


    //Add event listeners to the squares
    squares.forEach(square => {
        squares.classList.add('square');
        square.addEventListener('click', handleSquareClick);
        square.addEventListener('mouseover', handleMouseOver);
        square.addEventListener('mouseout', handleMouseOut);
    });
});