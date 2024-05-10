import styled from 'styled-components';
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";


export const StyledDescription = styled.p`
  ${font({Fmax: 20, Fmin: 16, color: theme.colors.secondaryTextColor}  )};
    line-height: 36px;
`
