'use strict';

const success = () => {
$('#status-box').text('Action Successful');
};

const onPatchSuccess = () => {
$('#status-box').text('Game successfully updated');
};

const failure = () => {
  $('#status-box').text('There seems to have been an error');
};

module.exports = {
  failure,
  success,
  onPatchSuccess,
};
