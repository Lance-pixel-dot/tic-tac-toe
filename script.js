const startGame = ((playerOneMarker, playerTwoMarker, playerOneName, playerTwoName) => {
    const rows = 3;
    const columns = 3;
    const gameBoard = [];

    for(let i = 0; i < rows; i++){
        gameBoard[i] = [];
        for(let j = 0; j < columns; j++){
            gameBoard[i][j] = '';
        }
    }

    console.log(gameBoard);

    let keepRunning = true;

 gamePlayActionOne();

function gamePlayActionOne(){

    const playerOneRow = prompt('PLayer 1 enter the row where you want to place your Marker');
    const playerOneColumn = prompt('Player 1 enter the column where you want to place your Marker');

    gameBoard[playerOneRow][playerOneColumn] = playerOneMarker;

    winConditionChecker();

}
function gamePlayActionTwo(){
    
    const playerTwoRow = prompt('Player 2 enter the row where you want to place your Marker');
    const playerTwoColumn = prompt('Player 2 enter the column where you want to place your Marker');

    gameBoard[playerTwoRow][playerTwoColumn] = playerTwoMarker;

    winConditionChecker();

}
    console.log(gameBoard);
    
function winConditionChecker(){
    if(
        //player one winning conditions
        gameBoard[0][0] == playerOneMarker && gameBoard[0][1] == playerOneMarker && gameBoard[0][2] == playerOneMarker ||
        gameBoard[1][0] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[1][2] == playerOneMarker ||
        gameBoard[2][0] == playerOneMarker && gameBoard[2][1] == playerOneMarker && gameBoard[2][2] == playerOneMarker ||
        gameBoard[0][0] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[2][2] == playerOneMarker ||
        gameBoard[0][2] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[2][0] == playerOneMarker
    ){
        keepRunning = false;
        console.log(keepRunning);
        console.log(`${playerOneName} Wins!`);
        return;
    }else if(
        //player two winning conditions 
        gameBoard[0][0] == playerTwoMarker && gameBoard[0][1] == playerTwoMarker && gameBoard[0][2] == playerTwoMarker ||
        gameBoard[1][0] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[1][2] == playerTwoMarker ||
        gameBoard[2][0] == playerTwoMarker && gameBoard[2][1] == playerTwoMarker && gameBoard[2][2] == playerTwoMarker ||
        gameBoard[0][0] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[2][2] == playerTwoMarker ||
        gameBoard[0][2] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[2][0] == playerTwoMarker 
    ){
        keepRunning = false;
        console.log(keepRunning);
        console.log(`${playerTwoName} Wins!`);
        return;
    }else if(
        //draw condition
        gameBoard[0][0] != '' && gameBoard[0][1] != '' && gameBoard[0][2] != '' &&
        gameBoard[1][0] != '' && gameBoard[1][1] != '' && gameBoard[1][2] != '' &&
        gameBoard[2][0] != '' && gameBoard[2][1] != '' && gameBoard[2][2] != '' &&
        gameBoard[0][0] != '' && gameBoard[1][1] != '' && gameBoard[2][2] != '' &&
        gameBoard[0][2] != '' && gameBoard[1][1] != '' && gameBoard[2][0] != ''
    ){
         keepRunning = false;
         console.log(keepRunning);
         console.log('Draw!');
         return;
    }else if(keepRunning == true){
        keepRunning = 'stop';
        gamePlayActionTwo();
    }else if(keepRunning === 'stop'){
        keepRunning = true;
        gamePlayActionOne();
    }
}

});


const createPlayer = (name, marker) => {
    return{ name, marker };
}


const getPlayer = (() => {

    let playerOneName = prompt('What\'s Player 1 name?');
    let playerOneMarker = prompt('What\'s Player 1 Marker?', 'X or O');

    let playerTwoName;
    let playerTwoMarker;

    playerOneMarker = playerOneMarker.toUpperCase();

    if(playerOneMarker != 'X' && playerOneMarker != 'O'){

        alert('You can only choose between \'X\' or \'O\'');

    }else if(playerOneMarker == 'X'){

        alert('Then player 2 Marker will be \'O\'');
        playerTwoName = prompt('And what\'s Player 2 name?');
        playerTwoMarker = 'O';

        const playerOne = createPlayer(playerOneName, playerOneMarker);
        const playerTwo = createPlayer(playerTwoName, playerTwoMarker);
    
        console.log(playerOne);
        console.log(playerTwo);
    
        startGame(playerOneMarker, playerTwoMarker, playerOneName, playerTwoName);

    }else if(playerOneMarker == 'O'){

        alert('Then player 2 Marker will be \'X\'');
        playerTwoName = prompt('And what\'s Player 2 name?');
        playerTwoMarker = 'X';

        const playerOne = createPlayer(playerOneName, playerOneMarker);
        const playerTwo = createPlayer(playerTwoName, playerTwoMarker);
    
        console.log(playerOne);
        console.log(playerTwo);

        startGame(playerOneMarker, playerTwoMarker, playerOneName, playerTwoName);

    }
    
})();
