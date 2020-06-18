import { Field, Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { userAuth } from '../../actions';
import { TIME_OUT } from '../../constants';
import {
  profileInitialValues as initialValues,
  validateProfileForm,
} from '../../constants/formik';
import { UserContext } from '../../contexts/UserProvider';
import { auth, generateUserDocument } from '../../services/firebaseConfig';
import ProfileInfo from '../ProfileInfo';

function ProfileForm() {
  const { user, dispatch: userDispatch } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(user);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isUpdatePhoto, setIsUpdatePhoto] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState('');

  const handleUpdateProfile = async (
    { displayName, currentPassword, newPassword },
    { resetForm },
  ) => {
    const { currentUser } = auth();
    const user = displayName ? { ...userInfo, displayName } : { ...userInfo };
    if (currentPassword) {
      try {
        const cred = await auth.EmailAuthProvider.credential(
          user.email,
          currentPassword,
        );
        await currentUser.reauthenticateAndRetrieveDataWithCredential(cred);
        // Update password
        await currentUser.updatePassword(newPassword);
      } catch (error) {
        if (error.code.includes('password')) {
          setCurrentPasswordError(
            'Password you entered is incorrect. Please try again.',
          );
        } else if (error.code.includes('too-many-requests')) {
          setCurrentPasswordError('Too many requests, try again later.');
        }
        setTimeout(() => {
          setCurrentPasswordError('');
        }, TIME_OUT.sub);
        return;
      }
    }
    // Update user info
    if (isUpdatePhoto || displayName) {
      try {
        await generateUserDocument(user);
        userDispatch(userAuth(user));
        setUserInfo({ ...user });
        resetForm();
      } catch (error) {
        console.log(error);
        return;
      }
    }

    setUpdateSuccess(true);
    setTimeout(() => {
      setUpdateSuccess(false);
      setIsUpdatePhoto(false);
    }, TIME_OUT.sub);
  };

  const handleChangePhoto = ({ target: { files } }) => {
    const file = files[0];
    let data = new FormData();
    data.append('data', file);
    console.log(data);
    // setUserInfo({ ...userInfo, photoURL });
    // setIsUpdatePhoto(true);
  };

  const handleRemovePhoto = () => {
    setUserInfo({ ...userInfo, photoURL: null });
    setIsUpdatePhoto(false);
  };

  const { displayName, photoURL: newPhotoURL } = userInfo;
  return (
    <div className="profile-form detail-list" id="pills-tabContent">
      <div className="tab-pane fade active show" id="settings_detail">
        <div className="row">
          <div className="col-12">
            <ProfileInfo
              newPhotoURL={newPhotoURL}
              handleChangePhoto={handleChangePhoto}
              displayName={displayName}
              isUpdatePhoto={isUpdatePhoto}
              handleRemovePhoto={handleRemovePhoto}
            />
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleUpdateProfile}
                  validate={validateProfileForm}
                >
                  {({ handleSubmit, errors, touched, dirty }) => (
                    <Form
                      className="form-horizontal form-material mb-0"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <Field name="displayName">
                          {({ field }) => (
                            <input
                              type="text"
                              placeholder="Full Name"
                              className="form-control"
                              {...field}
                            />
                          )}
                        </Field>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-4">
                          <Field name="currentPassword">
                            {({ field }) => (
                              <input
                                type="password"
                                placeholder="Current password"
                                className="form-control"
                                {...field}
                              />
                            )}
                          </Field>
                          {((errors.currentPassword &&
                            touched.currentPassword) ||
                            currentPasswordError) && (
                            <span className="messages">
                              <p className="text-danger error">
                                {errors.currentPassword || currentPasswordError}
                              </p>
                            </span>
                          )}
                        </div>
                        <div className="col-md-4">
                          <Field name="newPassword">
                            {({ field }) => (
                              <input
                                type="password"
                                placeholder="New password"
                                className="form-control"
                                {...field}
                              />
                            )}
                          </Field>
                          {errors.newPassword && touched.newPassword && (
                            <span className="messages">
                              <p className="text-danger error">
                                {errors.newPassword}
                              </p>
                            </span>
                          )}
                        </div>
                        <div className="col-md-4">
                          <Field name="confirmPassword">
                            {({ field }) => (
                              <input
                                type="password"
                                placeholder="Confirm password"
                                className="form-control"
                                {...field}
                              />
                            )}
                          </Field>
                          {errors.confirmPassword && touched.confirmPassword && (
                            <span className="messages">
                              <p className="text-danger error">
                                {errors.confirmPassword}
                              </p>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          disabled={!isUpdatePhoto && !dirty}
                          type="submit"
                          className="btn btn-primary px-4 mt-3 mb-0"
                        >
                          {updateSuccess && <i className="ti-check" />}
                          Update Profile
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
