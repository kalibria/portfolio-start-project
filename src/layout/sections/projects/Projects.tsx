import React from 'react';
import {Card} from 'src/components/card/Card';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {GridWrapper} from 'src/components/wrapper/GridWrapper';
import styled from 'styled-components';

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
        <h2>Projects</h2>
        <p>Things I’ve built so far</p>
        <GridWrapper columns={"1fr 1fr 1fr"} rows={"1fr 1rf"} rowGap={"65px"} columnGap={"48px"}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
