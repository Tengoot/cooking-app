import React from 'react';
import {Redirect} from 'react-router-dom'

const SignOutComponent = () => {
  localStorage.removeItem('signedIn')
  return (
    <Redirect to="/recipes/" />
  );
};

export default SignOutComponent;
