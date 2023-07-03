import styled from '@emotion/styled';

export const ContactFormStyle = styled.form`
  max-width: 300px;
  margin-left: 305px;
  background-color: rgb(173, 223, 219);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
  border: #202020;
  box-shadow: rgb(139, 167, 147) -1px -1px 15px,
    rgb(255, 255, 255) 15px 15px 35px;
`;

export const ContactFormLabel = styled.label`
  margin-bottom: 10px;
  color: rgb(6, 58, 54);
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ContactFormInput = styled.input`
  padding: 8px 16px;
  margin-left: 28px;
  border-radius: 8px;
  background-color: rgb(247, 255, 250);
  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  /* font-style: italic; */
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  border: 0px;
  outline: 0px;
`;

export const ContactFormButton = styled.button`
  width: 250px;
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;
  transition: all 0.2s ease-in-out 0s;
  background-color: rgb(25, 138, 138);
  color: rgb(255, 255, 255);
  cursor: pointer;
  &:hover {
  box-shadow: none;
`;
