import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { ContainerStyle, TitleForm, RegisterForm, LabelForm, InputForm, ButtonForm, Box } from './pages.styled';
import phonebooklog from '../img/phonebooklog.jpg'

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
    <Box>
    <ContainerStyle>
      <TitleForm>Login</TitleForm>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <LabelForm>
          Email
          <InputForm
          label="Email"
          focused
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        </LabelForm>
        

        <LabelForm>
          Password
          <InputForm
          label="Password"
          focused
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        </LabelForm>
        

        <ButtonForm type='summit'>
          LogIn
        </ButtonForm>
      </RegisterForm>
      </ContainerStyle>
      <img src={phonebooklog} alt='' />
      </Box>
  );
}