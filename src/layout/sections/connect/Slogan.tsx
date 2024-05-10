import React from 'react';
import {SocialLinks} from 'src/layout/sections/connect/SocialLinks';
import styled from 'styled-components';
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <StyledTitle>Let’s Connect</StyledTitle>
      <SocialLinks/>
    </StyledSlogan>
  );
};

const StyledTitle = styled.h2`
    font-size: ${font({weight: 700, Fmax: 100, Fmin: 50, color: theme.colors.primaryTextColor})};
    margin-bottom: 30px;

    @media ${theme.media.mobile} {
        margin-bottom: 60px;
    }
`

const StyledSlogan = styled.div`
    max-width: 438px;

    @media ${theme.media.mobile} {
        margin-bottom: 90px;
    }
`
