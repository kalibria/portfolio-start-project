import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';


type MyButtonPropsStyle = {
  iconId?: string
  text: string
  padding: string
}

export const MyButton = ({iconId, text, padding}: MyButtonPropsStyle) => {
  return (
      <StyledButton padding={padding}>{iconId &&  <Icon iconId={iconId}/>} {text}</StyledButton>
  )
}

type StyledButtonPropsType = {
  padding: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: rgba(103, 108, 219, 1);
  color: rgba(255, 255, 255, 1);
  padding: ${props => props.padding};
  border: none
`


