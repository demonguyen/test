import * as Yup from 'yup';

export const validationSchemaSignin = Yup.object().shape({
  email: Yup.string()
    .email('You must enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const validationSchemaPasswordReset = Yup.object().shape({
  email: Yup.string()
    .email('You must enter a valid email')
    .required('Email is required'),
});

export const signinInitialValues = {
  email: '',
  password: '',
};

export const profileInitialValues = {
  displayName: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const validateProfileForm = async ({
  currentPassword,
  newPassword,
  confirmPassword,
}) => {
  const errors = {};
  if (currentPassword && currentPassword.length < 8) {
    errors.currentPassword = 'Password must minimum is 8 character';
  }
  if (currentPassword && !newPassword) {
    errors.newPassword = 'New password is required';
  }
  if (currentPassword && !confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }
  if (newPassword && newPassword.length < 8) {
    errors.newPassword = 'New password must minimum is 8 character';
  }
  if (newPassword && !currentPassword) {
    errors.currentPassword = 'Password is required';
  }
  if (newPassword && !confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  }
  if (confirmPassword && confirmPassword.length < 8) {
    errors.confirmPassword = 'Password  confirm must minimum is 8 character';
  }
  if (confirmPassword && !currentPassword) {
    errors.currentPassword = 'Password is required';
  }
  if (confirmPassword && !newPassword) {
    errors.newPassword = 'New password is required';
  }
  if (newPassword && confirmPassword !== newPassword) {
    errors.confirmPassword = 'Password confirm is not match';
  }
  return errors;
};
