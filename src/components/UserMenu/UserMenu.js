import useAuth from 'components/hooks/UseAuth';
import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { UserContainer, UserText, UserButton } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserContainer>
      <UserText>Hi, {user.name} !</UserText>
      <UserText>Email: {user.email}</UserText>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </UserButton>
    </UserContainer>
  );
}
