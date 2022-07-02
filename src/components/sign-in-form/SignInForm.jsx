import React, { useState } from 'react';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './SignInForm.styles.scss';



const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => { setFormFields(defaultFormFields); };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='sign-in-container'>
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type="email"
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label={'Password'}
          type="password"
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType={'google'}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;