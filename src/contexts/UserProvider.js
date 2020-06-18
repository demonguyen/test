import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../actions';
import * as types from '../actions/types';
import { auth, getUserDocument } from '../services/firebaseConfig';

export const UserContext = React.createContext();

const INITIAL_STATE = {};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.AUTH_USER_SUCCESS:
      return { ...action.payload };
    default:
      throw new Error();
  }
}

UserProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

function UserProvider({ children }) {
  const history = useHistory();
  const [user, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if (!user) {
        history.push('/signin');
      } else {
        const { email, refreshToken, uid } = user;
        const userInfo = await getUserDocument(uid);
        dispatch(userAuth(userInfo || { email, refreshToken, uid }));
      }
    });
  }, [history]);

  return (
    <UserContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
