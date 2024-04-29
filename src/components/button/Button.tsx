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
  as?:string
  href?:string
  backgroundColor: string
  textDecoration?: string

}

export const MyButton = ({iconId, text, paddingTop, paddingRight, paddingLeft, paddingBottom, as, href, backgroundColor, textDecoration}: MyButtonPropsStyle) => {
  return (
      <StyledButton paddingRight={paddingRight} paddingLeft={paddingLeft} paddingBottom={paddingBottom} paddingTop={paddingTop} backgroundColor={backgroundColor} textDecoration={textDecoration && textDecoration}>{iconId &&  <Icon width={"20px"} height={"20px"} viewBox={"-3 -3 20 20"} iconId={iconId} />} {text}</StyledButton>
  )
}



type StyledButtonPropsType = {
  paddingTop: string
  paddingBottom: string
  paddingRight: string
  paddingLeft: string
  backgroundColor: string
  textDecoration?: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: ${props => props.backgroundColor};
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 18px;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-right: ${props => props.paddingRight};
  padding-left: ${props => props.paddingLeft};
  border: none;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  line-height: 24px;
  text-decoration: ${props => props.textDecoration};
`

