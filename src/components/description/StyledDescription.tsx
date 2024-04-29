import styled from 'styled-components';

type StyledDescriptionPropsType = {
  margitTop?: string
  margitBottom?: string
}

export const StyledDescription = styled.p<StyledDescriptionPropsType>`
  font-size: 20px;
  line-height: 36px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-top: ${props => props.margitTop};
  margin-bottom: ${props => props.margitBottom};

`
