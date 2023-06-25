import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { ContainerStyle, RegisterForm, TitleForm, LabelForm, InputForm, ButtonForm } from './pages.styled';

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
    <ContainerStyle>
      <TitleForm>Registration</TitleForm>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
       
        <LabelForm>Name</LabelForm>
        <InputForm
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />

        <LabelForm>Email</LabelForm>
        <InputForm
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete=""
        />

        <LabelForm>Password</LabelForm>
        <InputForm
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="off"
        />

          <ButtonForm type="submit">Register</ButtonForm>
          
      </RegisterForm>
    </ContainerStyle>
  );
}
