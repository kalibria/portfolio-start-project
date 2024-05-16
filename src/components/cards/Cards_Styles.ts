import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Cards = styled.div`
    margin-top: 100px;

    @media ${theme.media.mobile} {
        margin-top: 60px;
    }
`

const Card = styled.div`
    flex-basis: 300px;
    flex-grow: 1;
    min-height: 567px;
    background-color: rgba(54, 54, 54, 1);
    color: rgba(204, 204, 204, 1);
    border-radius: 20px;
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);

    @media ${theme.media.desktop} {
        width: 373px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    button {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        z-index: 1;
        transition: ${theme.animation.transition};
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 20px 20px 0 0;
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animation.transition};
    }

    &:hover {
        &::after {
            opacity: 1;
        }

        button {
            opacity: 1;
            z-index: 1;
            transform: translate(-50%, -50%);
        }

    }

    @media ${theme.media.tablet} {
        &::after {
            opacity: 1;
        }

        button {
            opacity: 1;
        }
    }


`

export const Image = styled.img`
    width: 100%;
    height: 260px;
`

const LinksWrapper = styled.div`
    width: 100%;
    padding: 20px 28px 25px 28px;
`


export const CardDescription = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: rgba(204, 204, 204, 1);
    margin-left: 28px;
    margin-right: 31px;
    margin-bottom: 12px;

    & span {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 21px;
    }
`

export const CardTitle = styled.h3`

    font-size: ${font({weight: 500, Fmax: 28, Fmin: 24, color: theme.colors.primaryTextColor})}
    line-height: 26px;
    text-align: center;
    margin-top: 27px;
    margin-bottom: 17px;
`
export const S = {
    Cards,
    Card,
    ImageWrapper,
    Image,
    LinksWrapper,
    CardDescription,
    CardTitle
}