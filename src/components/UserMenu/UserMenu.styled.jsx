import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const UserText = styled.p`
  font-style: italic;
`;

export const UserButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  max-width: 120px;
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
