import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Logo} from "../../../components/logo/Logo";
import {HeaderMenu} from "../headerMenu/HeaderMenu";
import {MyButton} from "../../../components/button/Button";
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const DesktopMenu = () => {
    return (
        <StyledDesktopMenu>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} >
                    <Logo/>
                    <HeaderMenu/>
                    <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
                </FlexWrapper>
            </Container>
        </StyledDesktopMenu>

    );
};

const StyledDesktopMenu = styled.div`
    @media ${theme.media.tablet}{
        display: none;
    }
`