'use strict';

const config = require('./config');
const store = require('./store');
const gameStore = require('./gameStore');

// These web requests get all the games, create a game on the server,
// get a specific game by its id, and update the server with every move made and if the game is over
const getIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (index, value) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameStore.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
        "game": {
          "cell": {
            "index": index,
            "value": value,
          },
        },
      },
  });
};

const updateGameStatus = function (over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameStore.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
        "game": {
          "over": over,
        },
      },
  });
};

module.exports = {
  getIndex,
  create,
  show,
  update,
  updateGameStatus,
};
