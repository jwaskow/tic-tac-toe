'use strict';

// const getFormFields = require('../../lib/get-form-fields');

// const gameLogic = require('./gameLogic');
const gameApi = require('./gameApi');
const gameStore = require('./gameStore');
const gameUi = require('./gameUi');
// const store = require('./store');

const onIndex = function (event) {
  event.preventDefault();
  gameApi.getIndex()
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const onCreate = function (event) {
  event.preventDefault();
  gameApi.create()
    .then((response) => {
      gameStore.game = response.game;
      return gameStore.game;
    })
    .then(gameUi.success)
    .catch(gameUi.failure);
};

const onShow = function (event) {
  event.preventDefault();
  let id = parseInt($('#game-id').val());
  gameApi.show(id)
    .then(gameUi.success)
    .catch(gameUi.failure);
};

// const onUpdate = function () {
//   if (store.store === undefined) {
//     return;
//   }
//   (function (response) {
//     gameStore.games = response.games;
//     return gameStore.games;
//   })();
//     let id = gameStore.games.id;
//     let data = {
//                 "game": {
//                   "cell": {
//                     "index": gameLogic.boardPosition,
//                     "value": gameLogic.boardPositionValue,
//                   },
//                   "over": false
//                 }
//               };
//     gameApi.update(id, data)
//     .then(gameUi.success)
//     .catch(gameUi.failure);
// };


const addAjaxHandlers = () => {
  $('#get-index').on('click', onIndex);
  $('.create-board-button').on('click', onCreate);
  $('#showGameById').on('submit', onShow);
};

module.exports = {
  addAjaxHandlers,
  // onUpdate,
};
