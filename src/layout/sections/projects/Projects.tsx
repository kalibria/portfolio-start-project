import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import styled from 'styled-components';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
          <SectionTitle>Projects</SectionTitle>
          <StyledDescription margitBottom={"100px"}>Things I’ve built so far</StyledDescription>
          <FlexWrapper wrap={"wrap"} justify={"space-between"} rowGap={"50px"}>
            <Cards/>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};


const StyledProjects = styled.div`
  width: 100%;
  padding: 100px 0;
`
