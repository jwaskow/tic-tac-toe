'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  }
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
};
