'use strict';

// const getFormFields = require('../../lib/get-form-fields');

const gameApi = require('./gameApi');
// const store = require('./store');
const gameUi = require('./gameUi');

const onIndex = function (event) {
  event.preventDefault();
  gameApi.index()
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const addAjaxHandlers = () => {
  $('#get-index').on('click', onIndex);
};

module.exports = {
  addAjaxHandlers,
};
