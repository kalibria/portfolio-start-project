import styled from 'styled-components';

type SectionTitleStyleProps = {
  marginTop?: string
  marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitleStyleProps>`
  font-size: 40px;
  font-weight: 700;
  line-height: 72px;
  color: rgba(255, 255, 255, 1);
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`
