const WHITE = 'W';
const BLACK = 'B';
const EMPTY = ' ';
const SEARCHED = '*';

export function generateBoardArray(n){
    const board = [];
    for (let i = 0; i < n ; i++){
        let row = [];
        for (let j = 0; j < n; j++){
            row.push(EMPTY);
        }
        board.push(row);
    }
    return board;
}

/**
 * Copies the board.
 * @returns {[string][]}
 */
export function copyBoard(board){
    return board.map(arr => arr.slice());
}
