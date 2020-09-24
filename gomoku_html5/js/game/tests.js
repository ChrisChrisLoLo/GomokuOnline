/**
 * Currently using this instead of jest as babel is not set up.
 */

function testSuite(){
    integrationTest();
    countLineTest();
    isWinningMoveTest();
}

function integrationTest(){
    initGame(6, 6);
    console.assert(playMove(1,1) === 0);
    console.assert(playMove(0,5) === 0);
    console.assert(playMove(2,2) === 0);
    console.assert(playMove(1,5) === 0);
    console.assert(playMove(3,3) === 0);
    console.assert(playMove(2,5) === 0);
    console.assert(playMove(4,4) === 0);
    console.assert(playMove(3,5) === 0);
    console.assert(playMove(5,5) === 1);
}

testCountLine1 = [
    [BLACK,BLACK,BLACK,BLACK,BLACK],
    [BLACK,EMPTY,EMPTY,EMPTY,BLACK],
    [BLACK,BLACK,WHITE,WHITE,BLACK],
    [BLACK,EMPTY,EMPTY,EMPTY,BLACK],
    [BLACK,BLACK,BLACK,BLACK,BLACK]
];

function countLineTest(){
    console.assert(countLine('\\', copyBoard(testCountLine1), 0,3, BLACK) === 2);
    console.assert(countLine('|', copyBoard(testCountLine1), 0,0, BLACK) === 5);
    console.assert(countLine('-', copyBoard(testCountLine1), 4,0, BLACK) === 5);
    console.assert(countLine('-', copyBoard(testCountLine1), 2,0, BLACK) === 2);
    console.assert(countLine('/', copyBoard(testCountLine1), 3,4, BLACK) === 2);
}

testIsWinningMove1 = [
    [BLACK,BLACK,BLACK,BLACK,BLACK,BLACK],
    [BLACK,EMPTY,EMPTY,EMPTY,BLACK,BLACK],
    [BLACK,BLACK,WHITE,WHITE,BLACK,BLACK],
    [BLACK,EMPTY,EMPTY,EMPTY,BLACK,BLACK],
    [BLACK,BLACK,BLACK,BLACK,WHITE,BLACK],
    [BLACK,BLACK,BLACK,BLACK,BLACK,WHITE],
];

function isWinningMoveTest(){
    console.assert(isWinningMove(5,0, copyBoard(testIsWinningMove1), false) === true);
    console.assert(isWinningMove(2,2, copyBoard(testIsWinningMove1), false) === false);
    console.assert(isWinningMove(2,0, copyBoard(testIsWinningMove1), true) === true);
    console.assert(isWinningMove(2,0, copyBoard(testIsWinningMove1), false) === false);
    console.assert(isWinningMove(0,0, copyBoard(testIsWinningMove1), false) === false);
}