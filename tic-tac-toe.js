document.addEventListener('DOMContentLoaded', () => {

    //Select all div elements in #board
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Begin with player 'X'
    const gameState = Array(9).fill(null); // Keep track of the board

    // Handle square click
    function handleSquareClick(event){
        const square = event.target;
        const index = Array.from(squares).indexOf(squares);

        //Does nothing if the token is already taken
        if (gameState[index] !== null){
            return;
        }

        //Update the game state and the UI
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        //Alternate the current player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    //Iterates through each div and adds the 'square' class
    squares.forEach(square => {
        squares.classList.add('square');
        square.addEventListener('click', handleSquareClick);
    });
});