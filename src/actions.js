import { createAction } from './utils';

export const SHOW_MODAL = 'redux-modal/SHOW_MODAL';
export const HIDE_MODAL = 'redux-modal/HIDE_MODAL';

export const showModal = createAction(SHOW_MODAL, 'modalName', 'payload');
export const hideModal = createAction(HIDE_MODAL);
