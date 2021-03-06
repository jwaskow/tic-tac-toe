'use strict';

// const getFormFields = require('../../lib/get-form-fields');

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const gameLogic = require('./gameLogic');

const authEvents = require('./auth/events.js');

const gameEvents = require('./gameEvents.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameLogic.addGameHandlers();
  gameEvents.addAjaxHandlers();
  $('.create-board-button').on('click', gameLogic.resetBoard);
});
