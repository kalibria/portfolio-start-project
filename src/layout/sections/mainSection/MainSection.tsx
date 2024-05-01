import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {Header} from 'src/layout/header/Header';
import {theme} from 'src/styles/Theme';
import styled from 'styled-components';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
// import photo from '../../../assets/images/myphoto.webp';
import photo from 'src/assets/images/photo.webp'

export const MainSection = () => {
  return (
    <StyledMainSection>
      <StyledBackground backgroundColor={theme.colors.primaryColor}/>
      <StyledBackground backgroundImage={photo}/>
      <Header/>
      <MainInfo>
        <Container>
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
        </Container>

      </MainInfo>

    </StyledMainSection>
  );
};

const StyledMainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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
const MainInfo = styled.div`
  width: 100%;
  position: absolute;
  top:175px;
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
