import React from 'react';
import UserProvider from './UserProvider';
import LoadingProvider from './LoadingProvider';

function Provider({ children }) {
  return (
    <LoadingProvider>
      <UserProvider>{children}</UserProvider>
    </LoadingProvider>
  );
}

export default Provider;
