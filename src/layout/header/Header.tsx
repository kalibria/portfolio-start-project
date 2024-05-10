import React, {useEffect, useState} from 'react';
import {S} from "./Header_styles";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;

    useEffect (() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize",() => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleWindowResize);
    },[])

    return (
        <S.Header>
            <Container>
                <S.MenuWrapper>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/> : <DesktopMenu/>}
                </S.MenuWrapper>
            </Container>
        </S.Header>
    )
}


