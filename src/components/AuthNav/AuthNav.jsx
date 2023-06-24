import { AuthNavList, NavLinkStyled, AuthNavContainer } from "./AuthNav.styled"

export default function AuthNav() {
    return (
        <AuthNavList>
            <NavLinkStyled to="/">Home</NavLinkStyled>  
            <AuthNavContainer>
                <NavLinkStyled to="/register">Register</NavLinkStyled>
                <NavLinkStyled to="/login">Log In</NavLinkStyled>
            </AuthNavContainer>
        </AuthNavList>
    )
}