import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {StyledDescription} from 'src/components/StyledDescription';
import {Header} from 'src/layout/header/Header';
import styled from 'styled-components';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
// import photo from '../../../assets/images/myphoto.webp';
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
            <StyledDescription>I’am freelance <StyledTitle> web developer</StyledTitle> based in Indonesia who loves to craft attractive design experiences for the web.</StyledDescription>
            <ButtonsWrapper>
              <MyButton text={'Email me'} iconId={"envelope"} paddingTop={"20px"} paddingBottom={"20px"} paddingRight={"40px"} paddingLeft={"40px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
              <MyButton as="a" href="#" text={'Download CV'} iconId={"download"} paddingTop={"10px"} paddingBottom={"10px"} paddingRight={"20px"} paddingLeft={"20px"} backgroundColor={"transparent"} textDecoration={"underline"}/>
            </ButtonsWrapper >
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
}

const StyledBackground = styled.div<StyledBackgroundPropsType>`
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  flex-basis: 50%;
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
  line-height: 108px;
`

const MainDescription = styled.section`
  max-width: 404px;
  min-height: 202px;
  margin-top: 10px;
`
const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`

const StyledTitle = styled.h1`
  display: inline;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 400;
`
