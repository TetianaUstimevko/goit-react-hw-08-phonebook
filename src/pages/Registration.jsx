import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  ContainerStyle,
  RegisterForm,
  TitleForm,
  LabelForm,
  InputForm,
  ButtonForm,
  Box, RegisterText, RegisterLink
} from './pages.styled';
import phonebook from '../img/phonebook.jpg';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    
    <Box>
      <ContainerStyle>
        <TitleForm>Registration</TitleForm>

        <RegisterForm onSubmit={handleSubmit} autoComplete="off">
          <LabelForm>
            Name
            <InputForm
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              autoComplete="off"
              
            />
          </LabelForm>

          <LabelForm>
            Email
            <InputForm
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete=""
              
            />
          </LabelForm>

          <LabelForm>
            Password
            <InputForm
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="off"
              
            />
          </LabelForm>

          <ButtonForm type="submit">Register</ButtonForm>
          <RegisterText>Alredy registered? <RegisterLink to={'/login'}>Sign in</RegisterLink></RegisterText>
        </RegisterForm>
      </ContainerStyle>
      <img src={phonebook} alt='' />
      </Box>
      
  );
}
