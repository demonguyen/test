import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { hideLoading, showLoading } from '../../actions';
import { TIME_OUT } from '../../constants';
import {
  signinInitialValues as initialValues,
  validationSchemaSignin as validationSchema,
} from '../../constants/formik';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { auth } from '../../services/firebaseConfig';
import AuthHeader from '../AuthHeader';

function Signin() {
  const { dispatch: loadingDispatch } = useContext(LoadingContext);
  const history = useHistory();
  const [errorAuth, setAuthError] = useState({});
  const handleSubmitSignin = async ({ email, password }) => {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        loadingDispatch(showLoading());
        setTimeout(() => {
          loadingDispatch(hideLoading());
          history.push('/');
        }, TIME_OUT.main);
      }
    } catch (error) {
      console.log(error);
      if (error.code.includes('user')) {
        setAuthError({
          errEmail: "Account doesn't exist, Please try again.",
          errPassword: '',
        });
      } else if (error.code.includes('password')) {
        setAuthError({
          errEmail: '',
          errPassword: 'Password You Entered is Incorrect. Please try again.',
        });
      } else if (error.code.includes('too-many-requests')) {
        setAuthError({
          errEmail: '',
          errPassword: 'Too many requests, try again later.',
        });
      }
      setTimeout(() => {
        setAuthError({});
      }, 3000);
    }
  };

  const { errEmail, errPassword } = errorAuth;

  useEffect(() => {
    document.body.style.backgroundColor = '#c7e4fc';
  }, []);

  return (
    <div className="row" style={{ marginTop: '80px' }}>
      <div className="col-sm-3 col-10 mx-auto">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmitSignin}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form
              className="md-float-material form-material"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <AuthHeader />
              <div className="auth-box card">
                <div className="card-block">
                  <div className="row m-b-20">
                    <div className="col-md-12">
                      <h3 className="text-center txt-primary">Sign In</h3>
                    </div>
                  </div>
                  <div className="form-group form-primary">
                    <Field name="email">
                      {({ field }) => (
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          {...field}
                        />
                      )}
                    </Field>
                    <span className="form-bar" />
                    {((errors.email && touched.email) || errEmail) && (
                      <span className="messages">
                        <p className="text-danger error">
                          {errors.email || errEmail}
                        </p>
                      </span>
                    )}
                  </div>
                  <div className="form-group form-primary">
                    <Field name="password">
                      {({ field }) => (
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          {...field}
                        />
                      )}
                    </Field>
                    <span className="form-bar" />
                    {((errors.password && touched.password) || errPassword) && (
                      <span className="messages">
                        <p className="text-danger error">
                          {errors.password || errPassword}
                        </p>
                      </span>
                    )}
                  </div>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                  <p className="text-inverse text-center">
                    <Link to="/password-reset">
                      <b>Recover password here!</b>
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signin;
