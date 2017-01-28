'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }

  $('.create-board-button').removeClass('hidden');
  $('#get-index').removeClass('hidden');
  $('#showGameById').removeClass('hidden');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#declare-winner').removeClass('hidden');
  $('#already-won').removeClass('hidden');
  $('#total-games-played').removeClass('hidden');
  $('#show-total-games').removeClass('hidden');
};

const signOutSuccess = (data) => {
  if (data) {
    console.log(data);
  }

  $('.create-board-button').addClass('hidden');
  $('.container-grid').addClass('hidden');
  $('#get-index').addClass('hidden');
  $('#showGameById').addClass('hidden');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#declare-winner').addClass('hidden');
  $('#declare-winner').text('');
  $('#already-won').addClass('hidden');
  $('#already-won').text('');
  $('#total-games-played').addClass('hidden');
  $('#show-total-games').addClass('hidden');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
