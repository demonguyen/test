import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { validationSchemaPasswordReset as validationSchema } from '../../constants/formik';
import { auth } from '../../services/firebaseConfig';

function ResetPassword() {
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [resetError, setResetError] = useState(null);

  const handleResetPassword = async ({ email }) => {
    try {
      await auth().sendPasswordResetEmail(email);
      setResetError(false);
      setEmailHasBeenSent(true);
      setTimeout(() => {
        setEmailHasBeenSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setResetError('Error resetting password');
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#c7e4fc';
  }, []);

  return (
    <section className="login-block">
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '80px' }}>
          <div className="col-sm-3 col-10 mx-auto">
            <Formik
              initialValues={{ email: '' }}
              onSubmit={handleResetPassword}
              validationSchema={validationSchema}
            >
              {({ handleSubmit, errors, touched }) => (
                <Form
                  className="md-float-material form-material"
                  onSubmit={handleSubmit}
                >
                  <div className="text-center" style={{ marginBottom: '30px' }}>
                    <img
                      src="https://colorlib.com/polygon/admindek/files/assets/images/logo.png"
                      alt="logo.png"
                    />
                  </div>
                  <div className="auth-box card">
                    <div className="card-block">
                      <div className="row m-b-20">
                        <div className="col-md-12">
                          <h3 className="text-left">Recover your password</h3>
                        </div>
                      </div>
                      <div className="form-group form-primary">
                        {emailHasBeenSent && (
                          <span className="messages">
                            <p className="text-primary primary">
                              An email has been sent to you!
                            </p>
                          </span>
                        )}
                        <Field name="email">
                          {({ field }) => (
                            <input
                              type="text"
                              name="email-address"
                              className="form-control"
                              placeholder="Your Email Address"
                              {...field}
                            />
                          )}
                        </Field>
                        {((touched.email && errors.email) || resetError) && (
                          <span className="messages">
                            <p className="text-danger error">
                              {errors.email || resetError}
                            </p>
                          </span>
                        )}
                        <span className="form-bar" />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                      <Link className="back-to-login" to="/signin">
                        ← Back to Login
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
