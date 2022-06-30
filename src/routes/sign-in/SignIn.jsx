import React from 'react';
import Button from '../../components/button/Button';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
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
      <Button onClick={logGoogleUser} buttonType='google'>Sign in with google</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;