import React, { useState } from 'react';
import {generateBoardArray} from '../../logic/gameLogic';
import Board from './Board';
import Score from "./Score";

const WHITE = 'W';
const BLACK = 'B';
const EMPTY = ' ';
const SEARCHED = '*';

export default function Game() {

    // Game config
    const [winningPieceCount, setWinningPieceCount] = useState(5);
    const [boardSize, setBoardSize] = useState(15);

    // Game state
    const [blackScore, setBlackScore] = useState(0);
    const [whiteScore, setWhiteScore] = useState(0);
    const [playingColor, setPlayingColor] = useState(BLACK);
    // used to communicate information to player
    const [message, setMessage] = useState('');
    const [board, setBoard] = useState(generateBoardArray(boardSize));
    // turn number (used for rules and even for history recording). Starts at 0
    const [turnNumber, setTurnNumber] = useState(0);


    /**
     * Copies the board.
     * @returns {[string][]}
     */
    function copyBoard(board){
        return board.map(arr => arr.slice());
    }

    /**
     * Play a move when clicking on a position
     * @param i the 0 indexed row position
     * @param j the 0 indexed col position
     * @returns {number} 0 if the move is valid, -1 if the move is invalid, and 1 if the player won
     */
    function playMove(i,j){
        console.log(`Turn ${turnNumber}: ${playingColor}'s move`);
        let newBoard = copyBoard(board);
        if (newBoard[i][j] !== EMPTY){
            sendPrompt('Cannot place your piece where one already exists!');
            return -1;
        }
        newBoard[i][j] = playingColor;
        let brokenRules = giveBrokenRules(i,j,newBoard);
        if (brokenRules.length !== 0){
            sendPrompt(`Broke the following rules: ${brokenRules}`);
            return -1;
        }
        else{
            setBoard(newBoard);

            board.forEach((row)=>{
                console.log(row);
            });

            if(isWinningMove(i,j,newBoard,true)){
                if (playingColor == BLACK){
                    setBlackScore(blackScore + 1);
                }
                else {
                    setWhiteScore(whiteScore + 1);
                }
                resetGame();
            }
            else{
                setPlayingColor(playingColor===BLACK?WHITE:BLACK);
                setTurnNumber(turnNumber + 1);
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

    /**
     * Checks if a move is winning depending if there is a line of N pieces
     * @param i
     * @param j
     * @param board
     * @param isOverlineAllowed determines if lines of # pieces > N are allowed.
     * @returns {boolean}
     */
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

    /**
     * Count the number of pieces of a given position
     * @param dir determines the line we are counting the peices of
     * @param mutGrid is a grid we are willing to mutate. Used for recursive DFS
     * @param i
     * @param j
     * @param expPiece is the piece we are looking for
     * @returns {number}
     */
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
     * Reset game
     */
    function resetGame(){
        setPlayingColor(BLACK);
        setTurnNumber(0);
        setBoard(generateBoardArray(boardSize));
    }

    /**
     * Sends a prompt to the UI. This is usually if a move is invalid or if someone has won.
     * Will do more than logging in the near future.
     * @param message: The message to display to the user
     */
    function sendPrompt(message){
        console.log(message);
        setMessage(message);
    }

    return (
        <div>
            <Score blackScore={blackScore} whiteScore={whiteScore} playingColor={playingColor}/>
            <Board board={board} playMove={playMove}/>
            {/*<Message/>*/}
            {/*<Settings/>*/}
        </div>
    );
}

