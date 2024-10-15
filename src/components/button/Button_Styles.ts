import {font} from "../../styles/Common";
import styled from "styled-components";


type StyledButtonPropsType = {
    padding: string
    backgroundColor: string
    textDecoration?: string
}

const Button = styled.button<StyledButtonPropsType>`
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    text-decoration: ${props => props.textDecoration};

    ${font({weight: 500, Fmax: 18, Fmin: 16})}
`


export const S = {
    Button
}