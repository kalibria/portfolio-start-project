import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme";
import {motion} from "framer-motion";

const scrollLeft =  keyframes `
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`
const IconsContainer = styled.div`
    width: 100%;
    overflow: hidden;
`

const Icons = styled.div`
    display: flex;
    width: 400%; 
    animation: ${scrollLeft} 15s linear infinite;
    
    & > * {
        flex: 1 0 auto;
    }
`
const IconWrapper = styled.span`
    padding-left: 40px;
    padding-right: 40px;
    `

const SkillsSection = styled.section`
    min-height: 200px;
    display: flex;
    align-items: center;
    padding: 100px 7px;
    text-align: center;
`

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 40px;
    margin: 100px auto;

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(3, 1fr);
        svg {
            width: 50px;
            height: 50px;
        }
    }
`


const SkillItemWrapper = styled.div`
text-align: center;
    
`

export const S = {
    scrollLeft,
    IconsContainer,
    Icons,
    IconWrapper,
    SkillsSection,
    SkillsWrapper,
    SkillItemWrapper
}