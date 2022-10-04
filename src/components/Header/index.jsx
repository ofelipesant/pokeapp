import React from "react";
import { Image } from "react-native";
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