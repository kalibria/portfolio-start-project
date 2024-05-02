import React from 'react';
import {Input} from 'src/components/form/Input';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';

export const Form = () => {
  return (
    <StyledForm>
      <Input labelText={"Your name:"} type={"text"}/>
      <Input labelText={"Your email  address:"} type={"email"}/>
      <Input labelText={"Tell about the project:"} type={"text"}/>
      <FormButton type={"submit"}>Send <Icon iconId={"arrowRight"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></FormButton>
    </StyledForm>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`


const FormButton = styled.button`
  width: 147px;
  height: 36px;
  color: rgba(103, 108, 219, 1);
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
