import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {S} from './Projects_Styles'

export const Projects: React.FC = () => {
  return (
    <S.Projects id={"works"}>
      <Container>
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
          <SectionTitle>Projects</SectionTitle>
          <StyledDescription>Things I’ve built so far</StyledDescription>
          <Cards/>
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};


