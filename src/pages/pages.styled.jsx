import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  width: 550px;
  height: 500px;

  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  background-color: rba(255, 255, 255, 0.811);
  border-radius: 24px;
`;

export const ContainerStyle = styled.div`
  background-color: transparent;

  border-radius: 24px;
  text-align: center;
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
`;

export const RegisterForm = styled.form`
  width: 420px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  margin-bottom: 15px;
  font-weight: 500;
`;

export const InputForm = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 12px;

  padding: 8px 12px;
  font-size: 16px;
  letter-spacing: 0.15px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.09);
  border-radius: 24px;
`;

export const ButtonForm = styled.button`
  width: 250px;
  height: 30px;
  margin-left: 30%;
  margin-bottom: 16px;
  color: rba(0, 204, 255);
  background-color: #2e61ec;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: none;
  }
`;

export const RegisterText = styled.p`
  color: #2e61ec;
  font-size: 20px;
`;

export const RegisterLink = styled(NavLink)`
  color: rgb(218, 27, 52);
  text-decoration: none;
  &:hover,
  &:focus {
    color: blue;
    padding: 0 8px;
    background-color: #c4d0f3;
    border-radius: 20px;
  }
`;

export const HomeContainer = styled.div`
  width: 1000px;
  height: 500px;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
  padding: 24 px;
  display: flex;
  background-color: transparent;
  border-radius: 24px;
`;

export const HomeImgBox = styled.div`
  width: 550px;
  height: 650px;
  margin-right: 24px;
`;

export const HomeTextBox = styled.div`
  width: 350px;
  padding: 20 px;
`;

export const HomeText = styled.h1`
  color: #2e61ec;
  text-align: center;
  width: 350px;
  height: 650px;
  padding: 16px;
  padding-top: 72px;
`;

export const HomeImg = styled.img`
  width: 500px;
  height: 500px;
  margin-right: 24px;
`;
