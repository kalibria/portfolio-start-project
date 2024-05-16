import React from 'react';
import {S} from './Form_Styles'

export const Input:React.FC<{labelText: string, type: "text" | "email", name: string, required:boolean}> = ({labelText, type, name, required}) => {
  return (
    <S.MyLabel>
      <S.LabelText>{labelText}</S.LabelText>
      <S.Input type={type} name={name} required={required}/>
    </S.MyLabel>
  );
};


