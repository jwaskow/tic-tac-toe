'use strict';

module.exports = true;

const enterBox0 = function (event) {
    event.preventDefault();
    board[0].push(store.store.turn);
};

const enterBox1 = function (event) {
    event.preventDefault();
    board[1].push(store.store.turn);
};

const enterBox2 = function (event) {
    event.preventDefault();
    board[2].push(store.store.turn);
};

const enterBox3 = function (event) {
    event.preventDefault();
    board[3].push(store.store.turn);
};

const enterBox4 = function (event) {
    event.preventDefault();
    board[4].push(store.store.turn);
};

const enterBox5 = function (event) {
    event.preventDefault();
    board[5].push(store.store.turn);
};

const enterBox6 = function (event) {
    event.preventDefault();
    board[6].push(store.store.turn);
};

const enterBox7 = function (event) {
    event.preventDefault();
    board[7].push(store.store.turn);
};

const enterBox8 = function (event) {
    event.preventDefault();
    board[8].push(store.store.turn);
};

const addLogicHandlers = () => {
('#box0').on('click', enterBox0);
('#box1').on('click', enterBox1);
('#box2').on('click', enterBox2);
('#box3').on('click', enterBox3);
('#box4').on('click', enterBox4);
('#box5').on('click', enterBox5);
('#box6').on('click', enterBox6);
('#box7').on('click', enterBox7);
('#box8').on('click', enterBox8);
};
