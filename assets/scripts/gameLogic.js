'use strict';



let board = ['', '', '', '', '', '', '', '', ''];  // board is an empty grid

let turnCount = 0;

// checkWinner checks if either player has a winning combination.
// if any of the winning combos are 'true', a winner is declared.

const checkWinner = function (board) {
  if (((board[0] === 'x') && (board[1] === 'x') && (board[2] === 'x')) || ((board[3] === 'x') && (board[4] === 'x') && (board[5] === 'x')) ||
      ((board[6] === 'x') && (board[7] === 'x') && (board[8] === 'x')) || ((board[0] === 'x') && (board[3] === 'x') && (board[6] === 'x')) ||
      ((board[1] === 'x') && (board[4] === 'x') && (board[7] === 'x')) || ((board[2] === 'x') && (board[5] === 'x') && (board[8] === 'x')) ||
      ((board[0] === 'x') && (board[4] === 'x') && (board[8] === 'x')) || ((board[2] === 'x') && (board[4] === 'x') && (board[6] === 'x'))) {
        console.log('x is the winner!');
        return 'x is the winner!';
} else if ((board[0] === 'o' && board[1] === 'o' && board[2] === 'o') || (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') ||
      (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') || (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') ||
      (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') || (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') ||
      (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') || (board[2] === 'o' && board[4] === 'o' && board[6] === 'o')) {
        console.log('o is the winner!');
        return 'o is the winner!';
      }
      else if (turnCount > 8) {
        console.log('This game is a draw!');
        return 'This game is a draw!';
      }
    };

const makeMove = function (num) {
    if (board[num] !== '') {
      console.log("Please pick an empty square!");
      return "Please pick an empty square!";
    }

    if (turnCount % 2 === 0) {
       board[num] = "x";
    } else {
       board[num] = "o";
   }
   for (let i = 0; i < board.length; i++) {
     $(('#box' + [i]).text) = board[i];
   }
     turnCount++;
     console.log(turnCount);
     return turnCount;
};

const testGame = function (num) {
  makeMove(num);
  console.log(board);
  return checkWinner(board);
};

// resetBoard iterated through the board array and assigns each item an empty string

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
  turnCount = 0;
  console.log(board);
};


module.exports = {
  board,
  makeMove,
  checkWinner,
  resetBoard,
};
