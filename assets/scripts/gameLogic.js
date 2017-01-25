'use strict';

let board = ['', '', '', '', '', '', '', '', ''];  // board is an empty grid

let turnCount = 0;

// checkWinner checks if either player has a winning combination.
// if any of the winning combos are 'true', a winner is declared.

const checkWinner = function (board) {
      if (((board[0] === 'x') && (board[1] === 'x') && (board[2] === 'x')) ||
      ((board[3] === 'x') && (board[4] === 'x') && (board[5] === 'x')) ||
      ((board[6] === 'x') && (board[7] === 'x') && (board[8] === 'x')) ||
      ((board[0] === 'x') && (board[3] === 'x') && (board[6] === 'x')) ||
      ((board[1] === 'x') && (board[4] === 'x') && (board[7] === 'x')) ||
      ((board[2] === 'x') && (board[5] === 'x') && (board[8] === 'x')) ||
      ((board[0] === 'x') && (board[4] === 'x') && (board[8] === 'x')) ||
      ((board[2] === 'x') && (board[4] === 'x') && (board[6] === 'x'))) {
        console.log('x is the winner!');
      } else if ((board[0] === 'o' && board[1] === 'o' && board[2] === 'o') ||
       (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') ||
       (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') ||
       (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') ||
       (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') ||
       (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') ||
       (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') ||
       (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')) {
        console.log('o is the winner!');
      } else if (turnCount > 8) {
        console.log('This game is a draw!');
      }
    };

const makeMove = function (num) {
    if (board[num] !== '') {
      console.log('Please pick an empty square!');
      return 'Please pick an empty square!';
    }

    if (turnCount % 2 === 0) {
      board[num] = 'x';
    } else {
      board[num] = 'o';
    }

    turnCount++;
    console.log(turnCount);
    return turnCount;
  };

const updateBoard = function () {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'x') {
      $('#' + i).text('X');
    } else if (board[i] === 'o') {
      $('#' + i).text('O');
    }
  }
};

const testGame = function (event) {
  event.preventDefault();
  makeMove(parseInt(event.target.id));
  console.log(board);
  updateBoard(parseInt(event.target.id));
  return checkWinner(board);
};

// resetBoard iterates through the board array and assigns each item an empty string

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('#' + i).text('');
  }

  turnCount = 0;
  console.log(board);
};

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
  updateBoard,
  resetBoard,
  addGameHandlers,
};
