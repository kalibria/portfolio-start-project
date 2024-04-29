import React from 'react';
import {SocialLinks} from 'src/layout/sections/connect/SocialLinks';
import styled from 'styled-components';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <StyledTitle>Let’s Connect</StyledTitle>
      <SocialLinks/>
    </StyledSlogan>
  );
};

const StyledTitle = styled.h2`
  font-size: 100px;
  font-weight: 700;
  line-height: 120px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 31px;
`

const StyledSlogan = styled.div`
  max-width: 438px;
`
