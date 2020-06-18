import React from 'react';
import { Redirect } from 'react-router-dom';

function NotFound() {
  return <Redirect to="/signin" />;
}

export default NotFound;
