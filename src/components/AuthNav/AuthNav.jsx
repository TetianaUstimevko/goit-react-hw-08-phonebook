import { AuthNavList, NavLinkStyled, AuthNavContainer, NavLinkStyledh2 } from "./AuthNav.styled"

export default function AuthNav() {
    return (
        <AuthNavList>
            <NavLinkStyled to="/">Home</NavLinkStyled>  
            <AuthNavContainer>
                <NavLinkStyledh2 to="/register">Register</NavLinkStyledh2>
                <NavLinkStyledh2 to="/login">Log In</NavLinkStyledh2>
            </AuthNavContainer>
        </AuthNavList>
    )
}