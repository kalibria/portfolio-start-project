import styled from 'styled-components';
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

export const CardTitle = styled.h3`
    
  font-size:  ${font({weight: 500, Fmax: 28, Fmin: 24, color: theme.colors.primaryTextColor}  )}
  line-height: 26px;
  text-align: center;
  margin-top: 27px;
  margin-bottom: 17px;
`

