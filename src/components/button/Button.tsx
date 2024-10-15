import React, {ReactNode} from 'react';
import {Icon} from 'src/components/icon/Icon';
import {S} from './Button_Styles'


type MyButtonPropsStyle = {
  iconId?: string
  text?: string
  padding: string
  as?:string
  href?:string
  backgroundColor: string
  textDecoration?: string
  onClick?: () => void
  id?:string
  children?:ReactNode
}

export const MyButton:React.FC<MyButtonPropsStyle> = ({iconId, text, padding, backgroundColor, textDecoration, onClick, id, children}: MyButtonPropsStyle) => {
  return (
      <S.Button padding={padding} backgroundColor={backgroundColor} textDecoration={textDecoration && textDecoration} onClick={onClick} id={id}>{iconId &&  <Icon width={"20px"} height={"20px"} viewBox={"-3 -3 20 20"} iconId={iconId} />} {text} {children}</S.Button>
  )
}






