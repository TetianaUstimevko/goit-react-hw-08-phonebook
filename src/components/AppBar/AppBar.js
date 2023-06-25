import useAuth from "components/hooks/UseAuth";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";

export default function AppBar() {
    
    const { isLoggedIn } = useAuth();
    return <>{isLoggedIn ? <UserMenu /> : <AuthNav />}</>;
}