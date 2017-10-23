'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('./actions');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * HOC to connect modals to the state.
 *
 * @param {Object} WrappedComponent
 * @param {String} stateName
 * @param {Function|null|undefined} mapStateToProps
 * @param {Function|null|undefined} mapDispatchToProps
 * @returns {WithConnectedModal}
 */
exports.default = function (WrappedComponent, stateName) {
  var mapStateToProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var mapDispatchToProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var WithConnectedModal = function WithConnectedModal(props) {
    return _react2.default.createElement(WrappedComponent, props);
  };

  WithConnectedModal.propTypes = {
    name: _propTypes2.default.string.isRequired,
    open: _propTypes2.default.bool.isRequired,
    showModal: _propTypes2.default.func.isRequired,
    onClose: _propTypes2.default.func.isRequired
  };

  WithConnectedModal.displayName = 'WithConnectedModal(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRedux.connect)(function (state, ownProps) {
    return Object.assign({}, {
      open: state[stateName].modalName === ownProps.name
    }, mapStateToProps ? mapStateToProps(state, ownProps) : {});
  }, function (dispatch, ownProps) {
    return Object.assign({}, {
      showModal: function showModal() {
        dispatch((0, _actions.showModal)(ownProps.name));
      },
      onClose: function onClose() {
        dispatch((0, _actions.hideModal)());
      }
    }, mapDispatchToProps ? mapDispatchToProps(dispatch, ownProps) : null);
  })(WithConnectedModal);
};

module.exports = exports['default'];