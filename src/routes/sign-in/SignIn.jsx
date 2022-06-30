import React from 'react';
import { signWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './SignIn.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <div>
      <h1>
        SignIn
      </h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;