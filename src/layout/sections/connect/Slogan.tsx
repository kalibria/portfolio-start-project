import React from 'react';
import {SocialLinks} from 'src/layout/sections/connect/SocialLinks';
import {S} from './Connect_Styles'

export const Slogan:React.FC = () => {
  return (
    <S.Slogan>
      <S.Title>Let’s Connect</S.Title>
      <SocialLinks/>
    </S.Slogan>
  );
};

