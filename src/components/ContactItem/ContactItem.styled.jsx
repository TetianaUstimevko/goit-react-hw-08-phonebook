import styled from '@emotion/styled';

// export const ContactItemContainer = styled.div`
//   max-width: 300px;
//   margin-left: 475px;
//   display: flex;
// `;

export const ContactItemList = styled.li`
  
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(229, 252, 250);
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  border: 0px;
  outline: 0px;
`;



export const ContactItemText = styled.p`
  
  
`;

export const ContactItemButton = styled.button`
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
