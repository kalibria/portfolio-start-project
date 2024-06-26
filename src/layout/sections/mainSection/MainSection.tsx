import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {theme} from 'src/styles/Theme';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import photo from '../../../assets/images/myphoto.webp';
// import photo from 'src/assets/images/photo.webp'
import {S} from './MainSection_Styled'
import {ModalWindow} from "../../../components/modalWindow/ModalWindow";
import Typewriter from 'typewriter-effect';



export const MainSection: React.FC = () => {
    const [isOpenModalWindow, setIsOpenModalWindow] = React.useState(false);
    const openModalWindow = () => {
        setIsOpenModalWindow(true);
    }

    return (
        <S.MainSection id={"home"}>
            <S.Background backgroundColor={theme.colors.primaryColor}/>
            <S.Background backgroundImage={photo}/>
            <S.MainInfo>
                <Container>
                    <FlexWrapper direction={'column'}>
                        <S.MainSectionText><Typewriter
                            options={{
                                autoStart: true,
                                cursor: ""
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello!')
                                    .start()
                            }}
                        />
                        </S.MainSectionText>
                        <S.MainSectionText>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    cursor: "",
                                }}
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(2000)
                                        .typeString('I’m Maria')
                                        .start()
                                }}
                            />
                        </S.MainSectionText>
                        <S.MainSectionText>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    cursor: "",
                                }}
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(4000)
                                        .typeString('Kushlianskaya')
                                        .start()
                                }}
                            />
                        </S.MainSectionText>
                        <S.MainDescription>
                            <StyledDescription>I’am freelance <S.Title> web developer</S.Title> who
                                loves to craft attractive design experiences for the web.</StyledDescription>
                            <S.ButtonsWrapper>
                                <MyButton text={'Email me'} iconId={"envelope"} padding={"20px 43px"}
                                          backgroundColor={"rgba(103, 108, 219, 1)"} onClick={openModalWindow}/>
                                <MyButton as="a" href="https://www.kalibria.online/ru/resume" text={'See my CV'} iconId={"download"} padding={"10px 20px"}
                                          backgroundColor={"transparent"} textDecoration={"underline"}/>
                            </S.ButtonsWrapper>
                            <ModalWindow isOpen={isOpenModalWindow} setIsOpen={setIsOpenModalWindow}/>
                        </S.MainDescription>
                    </FlexWrapper>
                </Container>

            </S.MainInfo>
        </S.MainSection>
    );
};
