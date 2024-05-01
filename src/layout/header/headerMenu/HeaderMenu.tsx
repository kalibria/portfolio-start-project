import React from 'react';
import {theme} from 'src/styles/Theme';
import styled from 'styled-components';
import {MENU_ITEMS} from 'src/variables'

export const HeaderMenu = () => {
const listItems = MENU_ITEMS.map((item)=>{
  return <LinkItem key={item}><Link href={item}>{item}</Link>
    <Mask><span>{item}</span></Mask>
    <Mask><span>{item}</span></Mask>
  </LinkItem>
})
  return (
    <StyledMenu>
      <ul>
        {listItems}
      </ul>
    </StyledMenu>
  );
};
const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 40px;
    font-weight: 500;
    font-size: 20px;
  }
`

const Link = styled.a`
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top:0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  
  & + & {
    top:50%;
    span{
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const LinkItem = styled.li`
  position: relative;  
  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accentColor};
    transform: scale(0);
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
  }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask}{
      transform: skewX(12deg) translateX(5px);
    }
    
    & + ${Mask}{
      transform: skewX(12px) translateX(-5px);
    }
  }
`
