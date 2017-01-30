'use strict';

const success = () => {
$('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  $('#status-box').text('Account Created');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
};

const failure = () => {
$('#status-box').text('Theres seems to have been an error');
};

// On sign in, un-hide game board elements
const signInSuccess = () => {
$('#status-box').text('Sign In Successful');

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

// On sign out, hide game board elements
const signOutSuccess = () => {
$('#status-box').text('Sign Out Successful');

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
  signUpSuccess,
  signInSuccess,
  changePassSuccess,
  signOutSuccess,
};
