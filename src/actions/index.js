import * as types from './types';

export const userAuth = (userInfo) => ({
  type: types.AUTH_USER_SUCCESS,
  payload: userInfo,
});

export const showLoading = () => ({
  type: types.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: types.HIDE_LOADING,
});
