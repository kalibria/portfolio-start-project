import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';


type MyButtonPropsStyle = {
  iconId?: string
  text: string
  paddingTop: string
  paddingBottom: string
  paddingRight: string
  paddingLeft: string
}

export const MyButton = ({iconId, text, paddingTop, paddingRight, paddingLeft, paddingBottom}: MyButtonPropsStyle) => {
  return (
      <StyledButton paddingRight={paddingRight} paddingLeft={paddingLeft} paddingBottom={paddingBottom} paddingTop={paddingTop}>{iconId &&  <Icon width={"20px"} height={"20px"} viewBox={"-3 -3 20 20"} iconId={iconId}/>} {text}</StyledButton>
  )
}

type StyledButtonPropsType = {
  paddingTop: string
  paddingBottom: string
  paddingRight: string
  paddingLeft: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: rgba(103, 108, 219, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 20px;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-right: ${props => props.paddingRight};
  padding-left: ${props => props.paddingLeft};
  border: none;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`


