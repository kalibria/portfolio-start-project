import React from 'react';
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
      <button>Send</button>
    </StyledForm>
  );
};


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input``

 const StyledLabel = styled.label`
   display: flex;
   flex-direction: column;
 `

 const LabelText = styled.span``
