import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 743px;

    position: relative;

    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
    }
`

type StyledBackgroundPropsType = {
    backgroundColor?: string
    backgroundImage?: string
}

const Background = styled.div<StyledBackgroundPropsType>`
    background-color: ${props => props.backgroundColor};
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50%;
    flex-basis: 50%;
    height: 743px;

    @media ${theme.media.mobile} {
        width: 100vw;
        flex-basis: 450px;
    }
`

const MainInfo = styled.div`
    width: 100%;
    position: absolute;
    top: 125px;

    @media ${theme.media.mobile} {
        top: 510px
    }
`

const MainSectionText = styled.span`
    ${font({family: "Playfair Display", weight: 700, Fmax: 75, Fmin: 50})}
`

const MainDescription = styled.div`
    max-width: 404px;
    min-height: 202px;
    margin-top: 10px;
`

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    max-width: 370px;
    width: 100%;
    justify-content: space-between;

    @media ${theme.media.mobile} {

        button:nth-child(1) {
            position: absolute;
            top: 2px
        }

        button: last-child {
        position: absolute;
        right: 20px
    }
    }
`

const Title = styled.h1`
    display: inline;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 400;
`


export const S = {
    MainSection,
    Background,
    MainInfo,
    MainSectionText,
    MainDescription,
    ButtonsWrapper,
    Title
}