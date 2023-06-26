import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const AuthNavList = styled.ul`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   background-color: #68e0da;
//   box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
//     0 1px 10px 0 rgba(0, 0, 0, 0.12);
// `;

export const AuthNavList = styled.ul`
  width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #68e0da;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  backdrop-filter: blur(3.5px);
`;

export const AuthNavBox = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #030f0d;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transform: scale3d(1, 1, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover,
  &:focus {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  &.active {
    font-weight: 900;
    color: white;
  }
`;

export const NavLinkStyledh2 = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  display: inline-block;

  border-radius: 5px;
  border: 1px solid white;
  background-color: transperent;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    color: #080808;
    background-color: white;
    border-radius: 5px;
    border: white;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const AuthNavContainer = styled.div``;
