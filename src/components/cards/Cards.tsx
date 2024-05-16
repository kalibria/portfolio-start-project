import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {theme} from 'src/styles/Theme';
import {PROJECTS} from 'src/variables/variables';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MyLink} from 'src/layout/sections/projects/MyLink';
import {S} from './Cards_Styles'


export const Cards:React.FC = () => {
  const projectsList = PROJECTS.map((proj) => {
    return <S.Card key={proj.id}>
      <S.ImageWrapper>
        <S.Image src={proj.img} alt={proj.title}/>
        <MyButton text={'View project'} padding={'10px 20px'} backgroundColor={theme.colors.accentColor}/>
      </S.ImageWrapper>
      <S.CardTitle>{proj.title}</S.CardTitle>
      <S.CardDescription>{proj.description}</S.CardDescription>
      <S.CardDescription><span>Tech stack : {proj.techStack}</span></S.CardDescription>
      <S.LinksWrapper>
        <FlexWrapper justify={"space-between"}>
          <MyLink iconId={"chain"} linkText={"Live Preview"} link={proj.livePreviewLink}/>
          <MyLink iconId={"githublink"} linkText={"View Code"} link={proj.codeLink}/>
        </FlexWrapper>
      </S.LinksWrapper>
    </S.Card>
  })

  return (
    <S.Cards>
      <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"20px"}>
        {projectsList}
      </FlexWrapper>
    </S.Cards>

  );
};

