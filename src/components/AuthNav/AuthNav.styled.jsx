import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #030f0d;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active,
  &:hover {
    color: #162ba3;
    border-bottom: 3px solid;
  }
`;

export const NavLinkStyledh2 = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid #162ba3;
  background-color:  #c3eee5;
  transition: color 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active,
  &:hover {
    color: #162ba3;
    background-color: white;
    border-radius: 5px;
    border: white;
  }
`;

export const AuthNavContainer = styled.div``;
