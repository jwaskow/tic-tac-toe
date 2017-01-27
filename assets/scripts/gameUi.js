'use strict';

const success = (data) => {
  if (data) {
     console.log(data);
   }
};

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
  $('.reset-board-button').addClass('hidden');
  $('.create-board-button').removeClass('hidden');
  $('.container-grid').removeClass('hidden');
  $('#get-index').removeClass('hidden');
  $('#showGameById').removeClass('hidden');
};

const signOutSuccesss = (data) => {
  if (data) {
    console.log(data);
  }
  $('.reset-board-button').removeClass('hidden');
  $('.create-board-button').addClass('hidden');
  $('.container-grid').addClass('hidden');
  $('#get-index').addClass('hidden');
  $('#showGameById').addClass('hidden');
};

const onPatchSuccess = (data) => {
  if (data) { console.log(data.game.cells); }
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  onPatchSuccess,
  signInSuccess,
  signOutSuccesss,
};
