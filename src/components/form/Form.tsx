import React from 'react';
import {Input} from 'src/components/form/Input';
import {Icon} from 'src/components/icon/Icon';
import {S} from './Form_Styles'


export const Form:React.FC = () => {
  return (
    <S.Form>
      <Input labelText={"Your name:"} type={"text"}/>
      <Input labelText={"Your email  address:"} type={"email"}/>
      <Input labelText={"Tell about the project:"} type={"text"}/>
      <S.FormButton type={"submit"}>Send <Icon iconId={"arrowRight"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></S.FormButton>
    </S.Form>
  );
};


