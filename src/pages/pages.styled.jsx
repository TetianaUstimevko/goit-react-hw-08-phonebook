import styled from '@emotion/styled';

export const ContainerStyle = styled.div`
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  aling-items: center;
  width: 100%;
  max-width: 600px;
`;

export const Titleh1 = styled.h1`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Titleh2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitleForm = styled.h1`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: colmn;
  gap: 15px;
  font-size: 22px;
  width: 100%;
`;

export const LabelForm = styled.label`
  font-weight: 500;
`;

export const InputForm = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 4px;
  width: 100%;
  height: 32;
  background: #2e61ec;
  border: none;
  color: #c3eee5;
  outline-width: 1.75;
  outline-color: #2e61ec;

  outline-style: solid;
  border-radius: 4px;
  &:hover,
  &:focus,
  &:focus-visible {
    outline-color: #cce66f;
    border: none;
  }
`;

export const ButtonForm = styled.button`
  padding: 5px 20px;
  color: black;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background-color: #f17be8;
  cursor: pointer;
  font-size: 24px;
  outline: none;
  border: 1px solid;
   &:hover {
    background-color: #f3f8f7;
    border: none;
  }
`;
