'use strict';

let board = ['', '', '', '', '', '', '', '', ''];

// Winning Combos:
// [0,1,2]
// [3,4,5]
// [6,7,8]
// [0,3,6]
// [1,4,7]
// [2,5,8]
// [0,4,8]
// [2,4,6]

const checkWinner = function (board) {
  if ((board[0] === 'x' && board[1] === 'x' && board[2]) || (board[3] === 'x' && board[4] === 'x' && board[5]) ||
      (board[6] === 'x' && board[7] === 'x' && board[8]) || (board[0] === 'x' && board[3] === 'x' && board[6]) ||
      (board[1] === 'x' && board[4] === 'x' && board[7]) || (board[2] === 'x' && board[5] === 'x' && board[8]) ||
      (board[0] === 'x' && board[4] === 'x' && board[8]) || (board[2] === 'x' && board[4] === 'x' && board[6])) {
        console.log('x is the winner!');
} else if ((board[0] === 'x' && board[1] === 'x' && board[2]) || (board[3] === 'x' && board[4] === 'x' && board[5]) ||
      (board[6] === 'o' && board[7] === 'o' && board[8]) || (board[0] === 'o' && board[3] === 'o' && board[6]) ||
      (board[1] === 'o' && board[4] === 'o' && board[7]) || (board[2] === 'o' && board[5] === 'o' && board[8]) ||
      (board[0] === 'o' && board[4] === 'o' && board[8]) || (board[2] === 'o' && board[4] === 'o' && board[6])) {
        console.log('o is the winner!')
      }
    };

const resetBoard = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
};
