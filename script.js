// function startGame(){
// create players
//     const player
// make player choose between 'X' or 'O'
// }

const playRound = (() => {
    //create board on console
    const rows = 3;
    const columns = 3;
    const gameBoard = [];

    for(let i = 0; i < rows; i++){
        gameBoard[i] = [];
        for(let j = 0; j < columns; j++){
            gameBoard[i][j] = 'X';
        }
    }

    gameBoard[0][1] = 'O';
    gameBoard[1][0] = 'O';
    gameBoard[1][2] = 'O';
    gameBoard[2][1] = 'O';

    console.log(gameBoard);

    //make sure both players take turns

    //make players choose what row and column to place their 'X' or 'O'

    //then output the result on the console

})();