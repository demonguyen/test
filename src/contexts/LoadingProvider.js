import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import * as types from '../actions/types';

export const LoadingContext = React.createContext();

const INITIAL_STATE = false;
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHOW_LOADING:
      return true;
    case types.HIDE_LOADING:
      return false;
    default:
      throw new Error();
  }
}

LoadingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function LoadingProvider({ children }) {
  const [loading, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        dispatch,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
