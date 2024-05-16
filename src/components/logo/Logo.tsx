import React from 'react';
import {Icon} from '../icon/Icon';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import { animateScroll } from 'react-scroll';

export const Logo = () => {
  return (
      <StyledLogo onClick={animateScroll.scrollToTop}>
              <Icon iconId={'logo'} fill={'white'} viewBox={"0 0 30 30"}/>
      </StyledLogo>

  );
};

const StyledLogo = styled.div`
    cursor: pointer;
   @media ${theme.media.tablet}
   {
       position: absolute;
       top: 30px;
       left: 30px;
       z-index: 999;
   }
`