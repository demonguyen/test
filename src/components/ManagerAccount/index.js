import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { hideLoading, showLoading, userAuth } from '../../actions';
import { TIME_OUT } from '../../constants';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { auth } from '../../services/firebaseConfig';
import { UserContext } from '../../contexts/UserProvider';

ManagerAccount.propTypes = {
  refSub: PropTypes.object.isRequired,
};

function ManagerAccount({ refSub }) {
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const handleSignout = () => {
    loadingDispatch(showLoading());
    setTimeout(() => {
      userDispatch(userAuth({}));
      loadingDispatch(hideLoading());
      auth().signOut();
    }, TIME_OUT.sub);
  };

  return (
    <ul
      ref={refSub}
      className="show-notification profile-notification dropdown-menu show"
      data-dropdown-in="fadeIn"
      data-dropdown-out="fadeOut"
    >
      <li>
        <Link to="/profile">
          <span>
            <i className="feather icon-user" /> Profile
          </span>
        </Link>
      </li>
      <li>
        <span onClick={handleSignout}>
          <i className="feather icon-log-out" /> Logout
        </span>
      </li>
    </ul>
  );
}

export default ManagerAccount;
