import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserText = styled.p`
  font-style: italic;
`;

export const UserButton = styled.p`
  margin-top: 10px;
  background-color: #c3eee5;
  border: none;
  padding: 5px 0;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:focus-visible {
    background-color: #eff5f4;
  }
`;
