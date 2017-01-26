'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(ui.success)
    .catch(ui.failure);
    if (store.store !== '') {
      $('.reset-board-button').addClass('hidden');
      $('.create-board-button').removeClass('hidden');
    }
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.failure);
    if (store.store === undefined) {
      $('.reset-board-button').removeClass('hidden');
      $('.create-board-button').addClass('hidden');
    }
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
