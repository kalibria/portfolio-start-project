import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {SOCIAL_LINKS} from 'src/variables/variables';
import {S} from './Connect_Styles'

export const SocialLinks:React.FC = () => {
  const listLinks = SOCIAL_LINKS.map((link) => {
    return <S.SocialLink href={link.href} key={link.name} target={"_blank"}> <Icon iconId={link.name} width={"35px"} height={"35px"} viewBox={"0 0 35 35"}/></S.SocialLink>
  })

  return (
    <S.SocialLinks>
      {listLinks}
    </S.SocialLinks>
  );
};

