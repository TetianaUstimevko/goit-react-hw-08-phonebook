import useAuth from "components/hooks/UseAuth";
import { NavigationContainer, NavLinkStyled } from "./Navigation.styled";

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    return (
        <NavigationContainer>
            <NavLinkStyled to="/Home">Home</NavLinkStyled>
            {isLoggedIn && (
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            )}
        </NavigationContainer>
    );
}