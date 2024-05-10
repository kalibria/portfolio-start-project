import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Form = styled.form`
    max-width: 500px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    ${font({Fmax: 30, Fmin: 22})} 
    
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

const Input = styled.input`
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

export const S = {
    Form,
    FormButton,
    MyLabel,
    LabelText,
    Input
}