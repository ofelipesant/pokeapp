import React from "react";
import {HeaderContainer, LogoContainer, Logo} from "./styles"

export default function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo
                source={{uri: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"}}/>
            </LogoContainer>
        </HeaderContainer>
    )
}