'use strict';

const success = () => {
$('#status-box').text('Action Successful');
};

const signUpSuccess = () => {
  $('#status-box').text('Account Created');
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-message').text('Either the email is not valid or the passwords do not match.');
};

const signInFail = () => {
  $('#sign-in-message').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
  $('#changePassModal').modal('hide');
};

const changePassFail = () => {
  $('#change-pass-message').text('Please fill out the fields.');
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
  $('#signInModal').modal('hide');
};

// On sign out, hide game board elements
const signOutSuccess = () => {
$('#status-box').text('Sign Out Successful.  Please Sign Up or Sign In to play again.');

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
  signUpFail,
  signInFail,
  changePassFail,
  signInSuccess,
  changePassSuccess,
  signOutSuccess,
};
