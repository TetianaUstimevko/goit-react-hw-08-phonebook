import useAuth from "components/hooks/UseAuth";
import UserMenu from "components/UserMenu.jsx/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";

export default function AppBar() {
    <Navigation />;
    const { isLoggedIn } = useAuth();
    return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
}