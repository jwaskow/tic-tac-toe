'use strict';

const getFormFields = require('../../lib/get-form-fields');

const gameApi = require('./gameApi');
// const store = require('./store');
const gameUi = require('./gameUi');

const onIndex = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const onCreate = function (event) {
  event.preventDefault();
  gameApi.create()
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const onShow = function (event) {
  event.preventDefault();
  let id = getFormFields(event.target);
  gameApi.show(id)
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index').on('click', onIndex);
  $('.reset-board-button').on('click', onCreate);
  $('#showGameById').on('submit', onShow);
};

module.exports = {
  addAjaxHandlers,
};
