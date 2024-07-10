// Function to initialize the game
function initializeGame() {
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let moves = 0;
    let gameEnded = false;
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    // Handle cell click event
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!gameEnded && cell.textContent === '') {
                cell.textContent = currentPlayer;
                moves++;
                if (checkWinner(currentPlayer)) {
                    status.textContent = `Player ${currentPlayer} wins!`;
                    gameEnded = true;
                } else if (moves === 9) {
                    status.textContent = "It's a draw!";
                    gameEnded = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    status.textContent = `Player ${currentPlayer}'s turn`;
                }
            }
        });
    });

    // Reset button click event
    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        status.textContent = `Player X's turn`;
        currentPlayer = 'X';
        moves = 0;
        gameEnded = false;
    });

    // Function to check for a winner
    function checkWinner(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => cells[index].textContent === player);
        });
    }
}

// Call initializeGame() when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeGame);
