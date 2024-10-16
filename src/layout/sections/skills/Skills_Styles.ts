import styled, {keyframes} from "styled-components";

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
`

export const S = {
    scrollLeft,
    IconsContainer,
    Icons,
    IconWrapper,
    SkillsSection
}