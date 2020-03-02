import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './style.scss';

const SignInUpPage = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUpPage;
