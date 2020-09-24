// Character constants. Emoji used for easier debugging.
const WHITE = 'W';
const BLACK = 'B';
const EMPTY = ' ';
const SEARCHED = '*';

const STARTING_COLOR = BLACK;

// global board
let BOARD = [];
// who's turn it is
let playingColor = STARTING_COLOR;
// turn number (used for rules and even for history recording). Starts at 0
let turnNumber = 0;

// number of pieces required to win.
let winningPieceCount = 5;