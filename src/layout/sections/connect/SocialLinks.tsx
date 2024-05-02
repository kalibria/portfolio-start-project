import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {theme} from 'src/styles/Theme';
import {SOCIAL_LINKS} from 'src/variables';
import styled from 'styled-components';

export const SocialLinks = () => {
  const listLinks = SOCIAL_LINKS.map((link) => {
    return <SocialLink href={link.href} key={link.name}> <Icon iconId={link.name} width={"35px"} height={"35px"} viewBox={"0 0 35 35"}/></SocialLink>
  })

  return (
    <StyledSocialLinks>
      {listLinks}
    </StyledSocialLinks>
  );
};


const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

const SocialLink = styled.a`
  color: ${theme.colors.primaryTextColor};

  &:hover {
    color: ${theme.colors.accentColor}
  }
`
