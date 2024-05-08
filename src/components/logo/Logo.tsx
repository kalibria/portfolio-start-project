import React from 'react';
import {Icon} from '../icon/Icon';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
  return (
      <StyledLogo>
          <a href={'/'}>
              <Icon iconId={'logo'} fill={'white'} viewBox={"0 0 30 30"}/>
          </a>
      </StyledLogo>

  );
};

const StyledLogo = styled.div`
   @media ${theme.media.tablet}
   {
       position: absolute;
       top: 30px;
       left: 30px;
       z-index: 999;
   }
`