import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';

type MyLinkPropsType = {
  iconId: string
  linkText: string
  link: string
}

export const MyLink = ({iconId, linkText, link}: MyLinkPropsType) => {
  return (
    <StyledMyLink>
      <Icon iconId={iconId} width={'20px'} height={'20px'} viewBox={"0 0 20 20"}/>
      <a href={link}>{linkText}</a>
    </StyledMyLink>

  );
};

const StyledMyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & a {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  

`
