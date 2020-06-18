import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Avatar from 'react-avatar';
import { UserContext } from '../../contexts/UserProvider';

ProfileInfo.propTypes = {
  handleChangePhoto: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  isUpdatePhoto: PropTypes.bool.isRequired,
  handleRemovePhoto: PropTypes.func.isRequired,
  newPhotoURL: PropTypes.string,
};

ProfileInfo.defaultProps = {
  displayName: '',
  newPhotoURL: '',
};

function ProfileInfo({
  handleChangePhoto,
  displayName,
  isUpdatePhoto,
  handleRemovePhoto,
  newPhotoURL,
}) {
  const {
    user: { email, photoURL },
  } = useContext(UserContext);

  const renderPhoto = () => {
    const defaultImage = (
      <Avatar name={email && email[0].toUpperCase()} size="35" />
    );
    return newPhotoURL ? (
      <img src={newPhotoURL} height={100} className="rounded-circle" alt="" />
    ) : photoURL ? (
      <img src={photoURL} height={100} className="rounded-circle" alt="" />
    ) : (
      defaultImage
    );
  };

  return (
    <div className="profile-header">
      <div className="card">
        <div className="card-body">
          <div className="met-profile">
            <div className="row">
              <div className="col-lg-5 align-self-center mb-3 mb-lg-0">
                <div className="met-profile-main">
                  <div className="met-profile-main-pic">
                    {renderPhoto()}
                    <span className="fro-profile_main-pic-change">
                      <input type="file" onChange={handleChangePhoto} />
                      <i className="fas fa-camera" />
                    </span>
                  </div>
                  <div className="met-profile_user-detail">
                    <h5 className="met-user-name">
                      {displayName || 'Your username'}
                    </h5>
                    <span className="mb-0 met-user-name-post">
                      <i className="ti-email" />
                      <b>Email </b>: {email}
                    </span>
                    {isUpdatePhoto && (
                      <span className="fro-profile_main-pic-change">
                        <i onClick={handleRemovePhoto} className="ti-trash" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
