import React from 'react';
import {theme} from 'src/styles/Theme';
import styled from 'styled-components';

export const Input:React.FC<{labelText: string, type: "text" | "email"}> = ({labelText, type}) => {
  return (
    <MyLabel>
      <LabelText>{labelText}</LabelText>
      <StyledInput type={type}/>
    </MyLabel>
  );
};

const MyLabel = styled.label`
   display: flex;
   flex-direction: column;
   margin-bottom: 40px;
 `
const LabelText = styled.span`
   font-size: 30px;
   font-weight: 500;
   line-height: 36px;
 `

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  color: ${theme.colors.primaryTextColor};
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  padding: 15px;
  outline: none;
  
  &:focus-visible
  {
    border-color: ${theme.colors.accentColor}
  }
`
