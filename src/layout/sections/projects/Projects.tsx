import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {GridWrapper} from 'src/components/wrapper/GridWrapper';
import styled from 'styled-components';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
          <SectionTitle>Projects</SectionTitle>
          <StyledDescription margitBottom={"100px"}>Things I’ve built so far</StyledDescription>
          <GridWrapper columns={"1fr 1fr 1fr"} rows={"1fr 1rf"} rowGap={"65px"} columnGap={"48px"}>
            <Cards/>
          </GridWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};


const StyledProjects = styled.div`
  width: 100%;
  padding: 100px 0;
`
