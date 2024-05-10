import React from 'react';
import {Cards} from 'src/components/cards/Cards';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {SectionTitle} from 'src/components/sectionTitle/SectionTitle';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import styled from 'styled-components';
import {theme} from "../../../styles/Theme";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
          <SectionTitle>Projects</SectionTitle>
          <StyledDescription>Things I’ve built so far</StyledDescription>
          <Cards/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};


const StyledProjects = styled.div`
  width: 100%;
  padding: 100px 0;
  
  @media ${theme.media.mobile} {
    padding: 60px 0;
  }
`
