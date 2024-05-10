import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const Menu = styled.nav`
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
        cursor: pointer;
    }
    
    ${Mask}{
      transform: skewX(12deg) translateX(5px);
    }
    
    & + ${Mask}{
      transform: skewX(12px) translateX(-5px);
    }
  }
`

const DesktopMenu = styled.div`
    flex-grow: 0.5;
`

const MobileMenu = styled.div`

`

const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999;
    
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryTextColor};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css <{isOpen:boolean}>`
        background-color: rgba(255, 255, 255,0);
        `}
        
        
        &::before {
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryTextColor};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(-50deg) translateY(0);
            `}
        }

        &::after {
            content:"";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryTextColor};
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(50deg) translateY(0);
            `}
        }
    }
`

const MobilePopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    background-color: rgba(45, 53, 64, 1);
    z-index: 99;
    display: none;
;
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 170px
    `}
`

const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 40px;
    font-weight: 500;
    font-size: 20px;
  }
`

export const S = {
    Menu,
    Link,
    Mask,
    LinkItem,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobilePopup,
    StyledMenu
}