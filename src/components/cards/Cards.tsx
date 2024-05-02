import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {theme} from 'src/styles/Theme';
import {PROJECTS} from 'src/variables';
import {CardDescription} from './cardDescription';
import {CardTitle} from './CardTitle';
import {Image} from 'src/components/image/Image';

import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MyLink} from 'src/layout/sections/projects/MyLink';
import styled from 'styled-components';


export const Cards = () => {
  const projectsList = PROJECTS.map((proj) => {
    return <StyledCard key={proj.id}>
      <ImageWrapper>
        <Image src={proj.img} alt={proj.title}/>
        <MyButton text={'View project'} padding={'10px 20px'} backgroundColor={theme.colors.accentColor}/>
      </ImageWrapper>
      <CardTitle>{proj.title}</CardTitle>
      <CardDescription>{proj.description}</CardDescription>
      <CardDescription><span>Tech stack : {proj.techStack}</span></CardDescription>
      <FlexWrapper justify={"space-between"}>
        <MyLink iconId={"chain"} linkText={"Live Preview"} link={proj.livePreviewLink} margin={"0 0 25px 28px"}/>
        <MyLink iconId={"githublink"} linkText={"View Code"} link={proj.codeLink} margin={"0 53px 25px 28px"}/>
      </FlexWrapper>

    </StyledCard>
  })

  return (
    <>
      {projectsList}
    </>

  );
};


const StyledCard = styled.div`
  width: 373px;
  min-height: 567px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(204, 204, 204, 1);
  border-radius: 20px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
`

const ImageWrapper = styled.div`
  position: relative;
  
  &:hover{
    &::after{
      backdrop-filter: blur(5px);
    }

    button {
      opacity: 1;
      z-index: 1;
    }
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px 20px 0 0;
  }
  
  button {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);s
  }
`


