import styled from 'styled-components';
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type StyledDescriptionPropsType = {
  margitTop?: string
  margitBottom?: string
}

export const StyledDescription = styled.p<StyledDescriptionPropsType>`
  margin-top: ${props => props.margitTop};
  margin-bottom: ${props => props.margitBottom};

  ${font({Fmax: 20, Fmin: 16, color: theme.colors.secondaryTextColor}  )}

`
