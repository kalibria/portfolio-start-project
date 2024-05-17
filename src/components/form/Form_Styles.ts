import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Form = styled.form`
    max-width: 500px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    ${font({Fmax: 30, Fmin: 22})}

`

const FormButton = styled.button`
    width: 147px;
    height: 36px;
    ${font({Fmax: 30, Fmin: 22, color: theme.colors.accentColor})}

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
    ${font({Fmax: 30, Fmin: 22})}
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

    &:focus-visible, &:active {
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