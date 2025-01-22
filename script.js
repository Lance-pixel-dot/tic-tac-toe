const gameFunction = (() => {
    const rows = 3;
    const columns = 3;
    const gameBoard = [];

    for(let i = 0; i < rows; i++){
        gameBoard[i] = [];
        for(let j = 0; j < columns; j++){
            gameBoard[i][j] = '';
        }
    }

    const cells = document.querySelectorAll('.cells');
    const dialog = document.querySelector('dialog');
    const winner = document.querySelector('.winner');
    const restart = document.querySelector('.restart');
    const playerForm = document.querySelector('form');
    const formSub = document.querySelector('.submit-players');
    const getPlayerOneName = document.querySelector('#player-one-name');
    const getPlayerTwoName = document.querySelector('#player-two-name');
    const gameBoardDiv = document.querySelector('#game-board');
    const displayPlayerOne = document.querySelector('.player-one-name');
    const displayPlayerTwo = document.querySelector('.player-two-name');
    const nameDisplayContainer = document.querySelector('.display-name');

    const createPlayer = (name, marker) => {
        return{ name, marker };
    };

    playerForm.addEventListener('submit', e => {
        e.preventDefault();
    })

    let playerOneName;
    let playerOneMarker;
    let playerTwoName;
    let playerTwoMarker;

    formSub.addEventListener('click', () => {

     if(getPlayerOneName.value != '' && getPlayerTwoName.value != ''){
      const playerOne = createPlayer(getPlayerOneName.value, 'X');
      const playerTwo = createPlayer(getPlayerTwoName.value, 'O');

      playerOneName = playerOne.name;
      playerOneMarker = playerOne.marker;
      playerTwoName = playerTwo.name;
      playerTwoMarker = playerTwo.marker;

      displayPlayerOne.textContent = playerOne.name;
      displayPlayerTwo.textContent = playerTwo.name;

      nameDisplayContainer.style.display = 'flex';
      gameBoardDiv.style.display = 'grid';
      playerForm.style.display = 'none';
     }

    })

    let keepRunning = true;
    let indexRow;
    let indexColumn;

    cells.forEach(e => e.addEventListener('click', () => {

        indexRow = e.getAttribute('data-row');
        indexColumn = e.getAttribute('data-column');        

        if(e.textContent === '' && keepRunning === true){
            e.textContent = playerOneMarker;
            keepRunning = 'stop';
            gamePlayActionOne();
        }else if(keepRunning === 'stop' && e.textContent === ''){
            e.textContent = playerTwoMarker;
            keepRunning = true;
            gamePlayActionTwo();
        }

        restart.addEventListener('click', () => {
            e.textContent = '';
            for(let i = 0; i < rows; i++){
                gameBoard[i] = [];
                for(let j = 0; j < columns; j++){
                    gameBoard[i][j] = '';
                }
            }        
            dialog.close();
        })

    }))

    function gamePlayActionOne(){

        let playerOneRow = indexRow;
        let playerOneColumn = indexColumn;

        gameBoard[playerOneRow][playerOneColumn] = playerOneMarker;

        winConditionChecker();

    }
    function gamePlayActionTwo(){

        let playerTwoRow = indexRow;
        let playerTwoColumn = indexColumn;

        gameBoard[playerTwoRow][playerTwoColumn] = playerTwoMarker;

        winConditionChecker();

    }
    
    function winConditionChecker(){
        if(
            //player one winning conditions
            //rows
            gameBoard[0][0] == playerOneMarker && gameBoard[0][1] == playerOneMarker && gameBoard[0][2] == playerOneMarker ||
            gameBoard[1][0] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[1][2] == playerOneMarker ||
            gameBoard[2][0] == playerOneMarker && gameBoard[2][1] == playerOneMarker && gameBoard[2][2] == playerOneMarker ||
            //columns
            gameBoard[0][0] == playerOneMarker && gameBoard[1][0] == playerOneMarker && gameBoard[2][0] == playerOneMarker ||
            gameBoard[0][1] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[2][1] == playerOneMarker ||
            gameBoard[0][2] == playerOneMarker && gameBoard[1][2] == playerOneMarker && gameBoard[2][2] == playerOneMarker ||
            //diagonal
            gameBoard[0][0] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[2][2] == playerOneMarker ||
            gameBoard[0][2] == playerOneMarker && gameBoard[1][1] == playerOneMarker && gameBoard[2][0] == playerOneMarker
        ){

            keepRunning = true;
            dialog.showModal();
            winner.textContent = `${playerOneName} Wins!`;
            return;

        }else if(
            //player two winning conditions
            //rows
            gameBoard[0][0] == playerTwoMarker && gameBoard[0][1] == playerTwoMarker && gameBoard[0][2] == playerTwoMarker ||
            gameBoard[1][0] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[1][2] == playerTwoMarker ||
            gameBoard[2][0] == playerTwoMarker && gameBoard[2][1] == playerTwoMarker && gameBoard[2][2] == playerTwoMarker ||
            //columns
            gameBoard[0][0] == playerTwoMarker && gameBoard[1][0] == playerTwoMarker && gameBoard[2][0] == playerTwoMarker ||
            gameBoard[0][1] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[2][1] == playerTwoMarker ||
            gameBoard[0][2] == playerTwoMarker && gameBoard[1][2] == playerTwoMarker && gameBoard[2][2] == playerTwoMarker ||
            //diagonal
            gameBoard[0][0] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[2][2] == playerTwoMarker ||
            gameBoard[0][2] == playerTwoMarker && gameBoard[1][1] == playerTwoMarker && gameBoard[2][0] == playerTwoMarker 
        ){

            keepRunning = true;
            dialog.showModal();
            winner.textContent = `${playerTwoName} Wins!`;
            return;

        }else if(
            //draw condition
            gameBoard[0][0] != '' && gameBoard[0][1] != '' && gameBoard[0][2] != '' &&
            gameBoard[1][0] != '' && gameBoard[1][1] != '' && gameBoard[1][2] != '' &&
            gameBoard[2][0] != '' && gameBoard[2][1] != '' && gameBoard[2][2] != ''
        ){

            keepRunning = true;
            dialog.showModal();
            winner.textContent = 'Draw!';
            return;

        }
    }

})();