import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {theme} from 'src/styles/Theme';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
// import photo from '../../../assets/images/myphoto.webp';
import photo from 'src/assets/images/photo.webp'
import {S} from './MainSection_Styled'

export const MainSection:React.FC = () => {
  return (
    <S.MainSection>
      <S.Background backgroundColor={theme.colors.primaryColor}/>
      <S.Background backgroundImage={photo}/>
      <S.MainInfo>
        <Container>
          <FlexWrapper direction={'column'}>
            <S.MainSectionText>Hello!</S.MainSectionText>
            <S.MainSectionText>I’m Zarror Nibors</S.MainSectionText>
            <S.MainDescription>
              <StyledDescription>I’am freelance <S.Title> web developer</S.Title> based in Indonesia who loves to craft attractive design experiences for the web.</StyledDescription>
              <S.ButtonsWrapper>
                <MyButton text={'Email me'} iconId={"envelope"} padding={"20px 43px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
                <MyButton as="a" href="#" text={'Download CV'} iconId={"download"} padding={"10px 20px"} backgroundColor={"transparent"} textDecoration={"underline"}/>
              </S.ButtonsWrapper >
            </S.MainDescription>
          </FlexWrapper>
        </Container>

      </S.MainInfo>
    </S.MainSection>
  );
};
