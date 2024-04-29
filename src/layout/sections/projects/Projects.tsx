import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {GridWrapper} from 'src/components/wrapper/GridWrapper';
import styled from 'styled-components';

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
        <SectionTitle marginTop={"100px"}>Projects</SectionTitle>
        <StyledDescription margitBottom={"100px"}>Things I’ve built so far</StyledDescription>
        <GridWrapper columns={"1fr 1fr 1fr"} rows={"1fr 1rf"} rowGap={"65px"} columnGap={"48px"} marginBottom={"10px"}>
          <Cards/>
        </GridWrapper>
      </FlexWrapper>
    </StyledProjects>
  );
};


const StyledProjects = styled.div`
  background-color: rgba(34, 42, 54, 1);
  color: rgba(255, 255, 255, 1);


;
`
