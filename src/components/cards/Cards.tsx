import React from 'react';
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
      <Image src={proj.img} alt={proj.title}/>
      <CardTitle title={proj.title}/>
      <CardDescription text={proj.description}/>
      <CardDescription text={`Tech stack : ${proj.techStack}`}/>
      <FlexWrapper justify={"space-between"}>
        <MyLink iconId={"chain"} linkText={"Live Preview"} link={proj.livePreviewLink}/>
        <MyLink iconId={"githublink"} linkText={"View Code"} link={proj.codeLink}/>
      </FlexWrapper>

    </StyledCard>
  })
  return (
    {projectsList}
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


