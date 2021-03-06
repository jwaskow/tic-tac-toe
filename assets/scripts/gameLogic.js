'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');

let board = ['', '', '', '', '', '', '', '', ''];  // board is an empty grid/array

let turnCount = 0; // tracks the number of turns

let gameOver = false; // variable that tracks if the game has been won

let xWins = false; // variable that tracks if x wins

let oWins = false; // variable that tracks if o wins

let noneWins = false; // variable that tracks if the game is a draw

// checkWinner checks if either player has a winning combination.
// if any of the winning combos are 'true',
// a winner is declared and the corresponding variable is made true

const checkWinner = function (board) {
      if (((board[0] === 'x') && (board[1] === 'x') && (board[2] === 'x')) ||
      ((board[3] === 'x') && (board[4] === 'x') && (board[5] === 'x')) ||
      ((board[6] === 'x') && (board[7] === 'x') && (board[8] === 'x')) ||
      ((board[0] === 'x') && (board[3] === 'x') && (board[6] === 'x')) ||
      ((board[1] === 'x') && (board[4] === 'x') && (board[7] === 'x')) ||
      ((board[2] === 'x') && (board[5] === 'x') && (board[8] === 'x')) ||
      ((board[0] === 'x') && (board[4] === 'x') && (board[8] === 'x')) ||
      ((board[2] === 'x') && (board[4] === 'x') && (board[6] === 'x'))) {
        xWins = true;
        gameOver = true;
      } else if ((board[0] === 'o' && board[1] === 'o' && board[2] === 'o') ||
       (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') ||
       (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') ||
       (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') ||
       (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') ||
       (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') ||
       (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') ||
       (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')) {
        oWins = true;
        gameOver = true;
      } else if (turnCount > 8) {
        noneWins = true;
        gameOver = true;
      }

      gameApi.updateGameStatus(gameOver);
    };

// checks if game is not over and if chosen position is empty, if so
// it will assign the current move (x or o) to the correct position in the board array
const makeMove = function (num) {
    if (gameOver === true) {
      $('#already-won').text('The game has already been won!');
      return;
    }

    if (board[num] !== '') {
      $('#declare-winner').text('Please pick an empty square!');
      return;
    }

    if (turnCount % 2 === 0) {
      board[num] = 'x';
      $('#declare-winner').text('');
    } else {
      board[num] = 'o';
      $('#declare-winner').text('');
    }

    let moveValue = board[num];
    gameApi.update(num, moveValue)
    .then(gameUi.onPatchSuccess)
    .catch(gameUi.failure);

    turnCount++;
    return turnCount;
  };

// manipulates the text in the gameboard element to an x or o when makeMove updates the baord array
const updateBoard = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'x') {
      $('#' + i).text('X');
    } else if (board[i] === 'o') {
      $('#' + i).text('O');
    }
  }
};

// If a win condition is satisfied, displays corresdponding message to user
const winMessage = function () {
  if (xWins === true) {
    $('#declare-winner').text('X is the Winner!');
  } else if (oWins === true) {
    $('#declare-winner').text('O is the Winner!');
  } else if (noneWins === true) {
    $('#declare-winner').text('Nobody is the Winner!');
  }
};

// runs all the functions that make a move when a box is clicked
const testGame = function (event) {
  makeMove(parseInt(event.target.id));
  updateBoard();
  checkWinner(board);
  return winMessage();
};

// resetBoard iterates through the board array and assigns each item an empty string

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('#' + i).text('');
  }

  $('.container-grid').removeClass('hidden');
  $('#declare-winner').text('');
  $('#already-won').text('');
  turnCount = 0;
  xWins = false;
  oWins = false;
  noneWins = false;
  gameOver = false;
};

// click handlers for each box on the board
const addGameHandlers = () => {
  $('#0').on('click', testGame);
  $('#1').on('click', testGame);
  $('#2').on('click', testGame);
  $('#3').on('click', testGame);
  $('#4').on('click', testGame);
  $('#5').on('click', testGame);
  $('#6').on('click', testGame);
  $('#7').on('click', testGame);
  $('#8').on('click', testGame);
};

module.exports = {
  board,
  makeMove,
  checkWinner,
  winMessage,
  updateBoard,
  resetBoard,
  addGameHandlers,
};
