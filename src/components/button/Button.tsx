import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';
import {font} from "../../styles/Common";


type MyButtonPropsStyle = {
  iconId?: string
  text: string
  padding: string
  as?:string
  href?:string
  backgroundColor: string
  textDecoration?: string

}

export const MyButton = ({iconId, text, padding, as, href, backgroundColor, textDecoration}: MyButtonPropsStyle) => {
  return (
      <StyledButton padding={padding} backgroundColor={backgroundColor} textDecoration={textDecoration && textDecoration}>{iconId &&  <Icon width={"20px"} height={"20px"} viewBox={"-3 -3 20 20"} iconId={iconId} />} {text}</StyledButton>
  )
}



type StyledButtonPropsType = {
  padding: string
  backgroundColor: string
  textDecoration?: string
}

const StyledButton = styled.button<StyledButtonPropsType>`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  text-decoration: ${props => props.textDecoration};

  ${font({weight: 500, Fmax: 18, Fmin: 16}  )}
`

