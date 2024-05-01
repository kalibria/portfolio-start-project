import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import styled from 'styled-components';
import {HeaderMenu} from 'src/layout/header/headerMenu/HeaderMenu';
import {Logo} from 'src/components/logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} >
          <Logo/>
          <HeaderMenu/>
          <MyButton text={"Contact Me"} paddingTop={"10px"} paddingBottom={"10px"} paddingLeft={"20px"} paddingRight={"20px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
        </FlexWrapper>
      </Container>

    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  padding: 20px 0;
  
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 999;
`

