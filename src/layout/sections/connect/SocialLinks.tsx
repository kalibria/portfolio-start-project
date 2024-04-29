import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {SOCIAL_LINKS} from 'src/variables';
import styled from 'styled-components';

export const SocialLinks = () => {
  const listLinks = SOCIAL_LINKS.map((link) => {
    return <a href={link.href} key={link.name}> <Icon iconId={link.name} width={"35px"} height={"35px"} viewBox={"0 0 35 35"} fill={"white"}/></a>
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
