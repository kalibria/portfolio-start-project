import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";


const Menu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
        font-weight: 500;
        font-size: 20px;
    }
`
const LinkItem = styled.li`
    position: relative;
    cursor: pointer;
`

const NavLink = styled(Link)`
    color: ${theme.colors.primaryTextColor};
    position: relative;
    
    &::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
    }

    &:hover, &.active {
        &::after {
            height: 6px;
            width: 100%;
            background-color: ${theme.colors.accentColor};
            z-index: -3;
            
            position: absolute;
            bottom: 3px;
            left: 0;
            
            transition:width ${theme.animation.transition}
        }
    }
    
`


const DesktopMenu = styled.div`
    flex-grow: 0.5;
`

const MobileMenu = styled.div`
  
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
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

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryTextColor};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-50deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryTextColor};
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(50deg) translateY(0);
            `}
        }
    }
`

const MobilePopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(45, 53, 64, 1);
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 170px;
    
    transform: translateY(-100%);
    transition: .8s ease-in-out;
    

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `}
`

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
        font-weight: 500;
        font-size: 20px;
    }
`

export const S = {
    Menu,
    NavLink,
    LinkItem,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobilePopup,
    StyledMenu
}