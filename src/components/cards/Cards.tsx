import React from 'react';
import {PROJECTS} from 'src/variables/variables';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MyLink} from 'src/components/MyLink/MyLink';
import {S} from './Cards_Styles'
import {MyButton} from "../button/Button";
import {theme} from "../../styles/Theme";


export const Cards:React.FC = () => {
  const projectsList = PROJECTS.map((proj) => {
    return <S.Card key={proj.id}>
      <S.ImageWrapper>
        <S.Image src={proj.img} alt={proj.title}/>
        {proj.codeLink &&  <MyButton padding={'10px 20px'} backgroundColor={theme.colors.accentColor} >
          <a href={proj.livePreviewLink ? proj.livePreviewLink : proj.codeLink} target={'_blank'}>{'View project'}</a>
        </MyButton>
        }
      </S.ImageWrapper>
      <S.CardTitle>{proj.title}</S.CardTitle>
      <S.CardDescription>{proj.description}</S.CardDescription>
      <S.CardDescription><span><b>Tech stack</b> : {proj.techStack}</span></S.CardDescription>
      <S.LinksWrapper>
        <FlexWrapper justify={"space-between"}>
          {proj.livePreviewLink && <MyLink iconId={"chain"} linkText={"Live Preview"} link = {proj.livePreviewLink} />}
          {proj.codeLink && <MyLink iconId={"githublink"} linkText={"View Code"} link={proj.codeLink}/>}

        </FlexWrapper>
      </S.LinksWrapper>
    </S.Card>
  })

  return (
      <S.Cards>
        <S.CardsWrapper>
          {projectsList}
        </S.CardsWrapper>
      </S.Cards>

  );
};



