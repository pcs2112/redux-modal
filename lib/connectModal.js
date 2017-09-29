'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('./actions');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var WithConnectedModal = function (_Component) {
    _inherits(WithConnectedModal, _Component);

    function WithConnectedModal() {
      _classCallCheck(this, WithConnectedModal);

      return _possibleConstructorReturn(this, (WithConnectedModal.__proto__ || Object.getPrototypeOf(WithConnectedModal)).apply(this, arguments));
    }

    _createClass(WithConnectedModal, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithConnectedModal;
  }(_react.Component);

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