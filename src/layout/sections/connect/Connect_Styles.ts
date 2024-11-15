import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Connect = styled.div`
    padding: 100px 0;
    background-color: ${theme.colors.secondaryColor};
    
    @media ${theme.media.mobile} {
        padding: 60px 0;
    }
`

const Title = styled.h2`
    font-size: ${font({weight: 700, Fmax: 100, Fmin: 50, color: theme.colors.primaryTextColor})};
    margin-bottom: 30px;

    @media ${theme.media.mobile} {
        margin-bottom: 60px;
    }
`

const Slogan = styled.div`
    max-width: 438px;

    @media ${theme.media.mobile} {
        margin-bottom: 90px;
    }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

const SocialLink = styled.a`
    color: ${theme.colors.primaryTextColor};

    svg {
        transition: fill 0.3s ease; // Smooth transition for hover effect
    }

    svg {
        &:hover {
            color: ${theme.colors.accentColor}; // Hover color
        }
    }
`

export const S = {
    Connect,
    Title,
    Slogan,
    SocialLinks,
    SocialLink
}