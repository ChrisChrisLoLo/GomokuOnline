/**
 * Create a new game.
 * Resets the board to an n row x m col empty grid.
 * Resets the starting player.
 * Resets the turn number.
 * @param rows: number of rows
 * @param cols: number of columns
 */
function initGame(rows, cols){
    BOARD = [];
    for (let i = 0; i < rows ; i++){
        let row = [];
        for (let j = 0; j < cols; j++){
           row.push(EMPTY);
        }
        BOARD.push(row)
    }
    playingColor = STARTING_COLOR;
    turnNumber = 0;
}

/**
 * Copies the board.
 * @returns {[string][]}
 */
function copyBoard(board){
    return board.map(arr => arr.slice());
}

/**
 *
 * @param i the 0 indexed row position
 * @param j the 0 indexed col position
 * @returns {number} 0 if the move is valid, -1 if the move is invalid, and 1 if the player won
 */
function playMove(i,j){
    console.log(`Turn ${turnNumber}: ${playingColor}'s move`);
    let newBoard = copyBoard(BOARD);
    if (newBoard[i][j] !== EMPTY){
        sendPrompt('Cannot place your piece where one already exists!');
        return -1;
    }
    newBoard[i][j] = playingColor;
    let brokenRules = giveBrokenRules(newBoard);
    if (brokenRules.length !== 0){
        sendPrompt(`Broke the following rules: ${brokenRules}`);
        return -1;
    }
    else{
        BOARD = newBoard;

        BOARD.forEach((row)=>{
           console.log(row);
        });

        if(isWinningMove(i,j,newBoard,true)){
            return 1
        }
        else{
            playingColor = playingColor===BLACK?WHITE:BLACK;
            turnNumber += 1;
            return 0
        }
    }
}

/**
 * Return broken rules
 * @returns {Array}
 */
function giveBrokenRules(i,j,board) {
    return []
}

function isWinningMove(i,j,board,isOverlineAllowed=false) {
    const directions = ['\\','|','-','/'];
    let isWinning = false;
    directions.forEach((dir)=>{
        let lineCount = countLine(dir, copyBoard(board), i, j, playingColor);
        if (isOverlineAllowed && lineCount >= winningPieceCount){
            isWinning = true;
        }
        else if (!isOverlineAllowed && lineCount === winningPieceCount){
            isWinning = true;
        }
    });
    return isWinning;
}

function countLine(dir, mutGrid, i, j, expPiece) {
    if (mutGrid[i][j] !== expPiece){
        return 0;
    }

    let count = 1;
    mutGrid[i][j] = SEARCHED;
    console.log(mutGrid);

    let n = mutGrid.length - 1;
    if (n === -1) console.error('The grid is malformed!');
    let m = mutGrid[0].length - 1;
    if (m === -1) console.error('The grid is malformed!');

    switch (dir) {
        case '/':
            if (i-1 >= 0 && j+1 <= m) {
                count += countLine(dir, mutGrid, i-1, j+1, expPiece);
            }
            if (i+1 <= n && j-1 >= 0) {
                count += countLine(dir, mutGrid, i+1, j-1, expPiece);
            }
            break;
        case '\\':
            if (i+1 <= n && j+1 <= m) {
                count += countLine(dir, mutGrid, i+1, j+1, expPiece);
            }
            if (i-1 >= 0 && j-1 >= 0) {
                count += countLine(dir, mutGrid, i-1, j-1, expPiece);
            }
            break;
        case '-':
            if (j+1 <= m) {
                count += countLine(dir, mutGrid, i, j+1, expPiece);
            }
            if (j-1 >= 0) {
                count += countLine(dir, mutGrid, i, j-1, expPiece);
            }
            break;
        case '|':
            if (i+1 <= m) {
                count += countLine(dir, mutGrid, i+1, j, expPiece);
            }
            if (i-1 >= 0) {
                count += countLine(dir, mutGrid, i-1, j, expPiece);
            }
            break;
        default:
            console.error('Unknown character passed in!');
    }
    return count;
}

/**
 * Sends a prompt to the UI. This is usually if a move is invalid or if someone has won.
 * Will do more than logging in the near future.
 * @param message: The message to display to the user
 */
function sendPrompt(message){
    console.log(message)
}