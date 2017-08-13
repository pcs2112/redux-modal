'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actions.SHOW_MODAL:
      return _extends({}, state, {
        modalName: action.modalName,
        payload: action.payload
      });
    case _actions.HIDE_MODAL:
      return _extends({}, state, {
        modalName: null
      });
    default:
      return state;
  }
};

module.exports = exports['default'];