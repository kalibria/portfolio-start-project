import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Header} from 'src/layout/header/Header';
import styled from 'styled-components';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
// import myPhoto from '../../../assets/images/myphoto.webp';
import photo from 'src/assets/images/photo.webp'

export const MainSection = () => {
  return (
    <StyledMainSection>
      <StyledBackground backgroundColor={'rgba(34, 42, 54, 0.95)'}/>
      <StyledBackground backgroundImage={photo}/>
      <Header/>
      <MainInfo>
        <FlexWrapper direction={'column'}>
          <MainSectionText>Hello!</MainSectionText>
          <MainSectionText>I’m Zarror Nibors</MainSectionText>
          <MainDescription>
            <h1>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences for the web.</h1>
            <ButtonsWrapper>
              <MyButton text={'Email me'} iconId={"envelope"} paddingTop={"20px"} paddingBottom={"20px"} paddingRight={"40px"} paddingLeft={"40px"} />
              <div>
                <a href={'#'}>Download CV</a>
              </div>
            </ButtonsWrapper>
          </MainDescription>
        </FlexWrapper>
      </MainInfo>

    </StyledMainSection>
  );
};

const StyledMainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  min-height: 743px;
  
  position: relative;
`

type StyledBackgroundPropsType = {
  backgroundColor?: string
  backgroundImage?:string
  // width: string
}

const StyledBackground = styled.div<StyledBackgroundPropsType>`
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  object-fit: cover;
  width: 50vw;
  //width: 720px  ;
  height: 743px;
`
const MainInfo = styled.section`
  position: absolute;
  top:175px;
  left: 118px
`

const MainSectionText =styled.span`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 90px;
`

const MainDescription = styled.section`
  max-width: 404px;
  min-height: 202px;
`
const ButtonsWrapper = styled.div`
  display: flex;
`
