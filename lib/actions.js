"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideModal = exports.showModal = exports.HIDE_MODAL = exports.SHOW_MODAL = void 0;

var _utils = require("./utils");

var SHOW_MODAL = 'redux-modal/SHOW_MODAL';
exports.SHOW_MODAL = SHOW_MODAL;
var HIDE_MODAL = 'redux-modal/HIDE_MODAL';
exports.HIDE_MODAL = HIDE_MODAL;
var showModal = (0, _utils.createAction)(SHOW_MODAL, 'modalName', 'payload');
exports.showModal = showModal;
var hideModal = (0, _utils.createAction)(HIDE_MODAL);
exports.hideModal = hideModal;