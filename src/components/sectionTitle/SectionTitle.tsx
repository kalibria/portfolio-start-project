import styled from 'styled-components';
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type SectionTitleStyleProps = {
  marginTop?: string
  marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitleStyleProps>`
  font-size: ${font({weight: 700, Fmax: 40, Fmin: 36, color: theme.colors.primaryTextColor}  )};
  line-height: 72px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  
`
