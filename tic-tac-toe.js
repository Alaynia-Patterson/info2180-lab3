document.addEventListener('DOMContentLoaded', () => {

    //Select all div elements in #board
    const squares = document.querySelectorAll('#board div');

    //iterates through each div and adds the 'square' class
    squares.forEach(square => {
        squares.classList.add('square');
    });
});