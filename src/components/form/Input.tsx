import React from 'react';
import {S} from './Form_Styles'

export const Input:React.FC<{labelText: string, type: "text" | "email"}> = ({labelText, type}) => {
  return (
    <S.MyLabel>
      <S.LabelText>{labelText}</S.LabelText>
      <S.Input type={type}/>
    </S.MyLabel>
  );
};


