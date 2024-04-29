import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import styled from 'styled-components';

export const Form = () => {
  return (
    <StyledForm>
      <StyledLabel>
        <LabelText >Your name:</LabelText>
        <StyledInput/>
      </StyledLabel>
      <StyledLabel>
        <LabelText >Your email  address:</LabelText>
        <StyledInput/>
      </StyledLabel>
      <StyledLabel>
        <LabelText >Tell about the project:</LabelText>
        <StyledInput/>
      </StyledLabel>
      <FormButton type={"submit"}>Send <Icon iconId={"arrowRight"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></FormButton>
    </StyledForm>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  min-height: 60px;
  background-color: transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
`

 const StyledLabel = styled.label`
   display: flex;
   flex-direction: column;
   margin-bottom: 40px;
 `

 const LabelText = styled.span`
  font-size: 30px;
   font-weight: 500;
   line-height: 36px;
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
