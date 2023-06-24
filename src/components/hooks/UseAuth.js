import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, selectIsRefreshing } from 'redux/auth/auth-selectors';

export default function useAuth() {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    return {
        user,
        isLoggedIn,
        isRefreshing,
    };
}