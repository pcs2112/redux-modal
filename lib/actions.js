'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideModal = exports.showModal = exports.HIDE_MODAL = exports.SHOW_MODAL = undefined;

var _utils = require('./utils');

var SHOW_MODAL = exports.SHOW_MODAL = 'redux-modal/SHOW_MODAL';
var HIDE_MODAL = exports.HIDE_MODAL = 'redux-modal/HIDE_MODAL';

var showModal = exports.showModal = (0, _utils.createAction)(SHOW_MODAL, 'modalName', 'payload');
var hideModal = exports.hideModal = (0, _utils.createAction)(HIDE_MODAL);