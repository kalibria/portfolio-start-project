import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {S} from './MyLink_Styles'


type MyLinkPropsType = {
  iconId: string
  linkText: string
  link: string
}

export const MyLink: React.FC <MyLinkPropsType> = ({iconId, linkText, link}: MyLinkPropsType) => {
  return (
    <S.MyLink>
      <Icon iconId={iconId} width={'20px'} height={'20px'} viewBox={"0 0 20 20"}/>
      <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
    </S.MyLink>

  );
};



