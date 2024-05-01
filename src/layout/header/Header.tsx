import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import styled from 'styled-components';
import {Menu} from 'src/components/menu/Menu';
import {Logo} from 'src/components/logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} >
          <Logo/>
          <Menu/>
          <MyButton text={"Contact Me"} paddingTop={"10px"} paddingBottom={"10px"} paddingLeft={"20px"} paddingRight={"20px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
        </FlexWrapper>
      </Container>

    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  
  position: absolute;
  top:10px;
`

