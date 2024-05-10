import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {theme} from 'src/styles/Theme';
import {PROJECTS} from 'src/variables';
import {CardDescription} from './cardDescription';
import {CardTitle} from './CardTitle';

import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MyLink} from 'src/layout/sections/projects/MyLink';
import styled from 'styled-components';


export const Cards = () => {
  const projectsList = PROJECTS.map((proj) => {
    return <StyledCard key={proj.id}>
      <ImageWrapper>
        <StyledImage src={proj.img} alt={proj.title}/>
        <MyButton text={'View project'} padding={'10px 20px'} backgroundColor={theme.colors.accentColor}/>
      </ImageWrapper>
      <CardTitle>{proj.title}</CardTitle>
      <CardDescription>{proj.description}</CardDescription>
      <CardDescription><span>Tech stack : {proj.techStack}</span></CardDescription>
      <LinksWrapper>
        <FlexWrapper justify={"space-between"}>
          <MyLink iconId={"chain"} linkText={"Live Preview"} link={proj.livePreviewLink}/>
          <MyLink iconId={"githublink"} linkText={"View Code"} link={proj.codeLink}/>
        </FlexWrapper>
      </LinksWrapper>
    </StyledCard>
  })

  return (
    <StyledCards>
      <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"20px"}>
        {projectsList}
      </FlexWrapper>
    </StyledCards>

  );
};

const StyledCards = styled.div`
    margin-top: 100px;
  
    @media ${theme.media.mobile}{
      margin-top: 60px;
    }
`

const StyledCard = styled.div`
  flex-basis: 300px;
  flex-grow: 1;
  min-height: 567px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(204, 204, 204, 1);
  border-radius: 20px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  
  @media ${theme.media.desktop} {
    width: 373px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  
  button {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
    backdrop-filter: blur(5px);
    opacity: 0;
  }
  
  &:hover{
    &::after{
      opacity: 1;
    }

    button {
      opacity: 1;
      z-index: 1;
    }
    
  }
  
 @media ${theme.media.tablet} {
   &::after{
     opacity: 1;
   }

   button {
     opacity: 1;
   }
 }
  
  
`

export const StyledImage =  styled.img`
  width: 100%;
  height: 260px;
`

const LinksWrapper = styled.div`
    width: 100%;
    padding: 20px 28px 25px 28px;
`