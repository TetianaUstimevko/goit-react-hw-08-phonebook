import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { ContainerStyle, TitleForm, RegisterForm, LabelForm, InputForm, ButtonForm } from './pages.styled';

export default function Login() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <ContainerStyle>
      <TitleForm>Login</TitleForm>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <LabelForm>
          Email
        </LabelForm>
        <InputForm
          label="Email"
          helperText="Please enter your email"
          focused
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <LabelForm>
          Password
        </LabelForm>
        <InputForm
          label="Password"
          focused
          helperText="Please enter your password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <ButtonForm type='summit'>
          LogIn
        </ButtonForm>
      </RegisterForm>
    </ContainerStyle>
  );
}