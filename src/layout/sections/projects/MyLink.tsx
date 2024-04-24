import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';

type MyLinkPropsType = {
  iconId: string
  linkText: string
}

export const MyLink = ({iconId, linkText}: MyLinkPropsType) => {
  return (
    <StyledMyLink>
      <Icon iconId={iconId} width={'20px'} height={'20px'} viewBox={"0 0 20 20"}/>
      <a href={"#"}>{linkText}</a>
    </StyledMyLink>

  );
};

const StyledMyLink = styled.div`
  & a {
    color: rgba(255, 255, 255, 1);
  }
  

`
