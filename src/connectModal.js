import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, hideModal } from './actions';
import { getDisplayName } from './utils';

/**
 * HOC to connect modals to the state.
 *
 * @param {Object} WrappedComponent
 * @param {Function|null|undefined} mapStateToProps
 * @param {Function|null|undefined} mapDispatchToProps
 * @returns {WithConnectedModal}
 */
export default (WrappedComponent, mapStateToProps = null, mapDispatchToProps = null) => {
  class WithConnectedModal extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      open: PropTypes.bool.isRequired,
      showModal: PropTypes.func.isRequired,
      onClose: PropTypes.func.isRequired
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }

  WithConnectedModal.displayName = `WithConnectedModal(${getDisplayName(WrappedComponent)})`;

  return connect(
    (state, ownProps) => Object.assign({}, {
      open: state.modals.modalName === ownProps.name
    }, mapStateToProps ? mapStateToProps(state, ownProps) : {}),
    (dispatch, ownProps) => Object.assign({}, {
      showModal: () => {
        dispatch(showModal(ownProps.name));
      },
      onClose: () => {
        dispatch(hideModal());
      }
    }, mapDispatchToProps ? mapDispatchToProps(dispatch, ownProps) : null)
  )(WithConnectedModal);
};
