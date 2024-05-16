import React, {useState} from 'react';
import {Icon} from "../components/icon/Icon";
import styled from "styled-components";
import { animateScroll } from 'react-scroll';

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setShowBtn(true)
        }else {
            setShowBtn(false)
        }
    })

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={animateScroll.scrollToTop}>
                    <Icon iconId={"arrowRight"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0 0 0 / 0.3);
    padding: 8px;
    
    position: fixed;
    bottom: 50px;
    right: 50px;
    
    & svg {
    transform: rotate(-90deg);
}
`