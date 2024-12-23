import React from 'react';
import {MyButton} from 'src/components/button/Button';
import {Container} from 'src/components/container/Container';
import {StyledDescription} from 'src/components/description/StyledDescription';
import {theme} from 'src/styles/Theme';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import photo from '../../../assets/images/myphoto.webp';
import {S} from './MainSection_Styled'
import {ModalWindow} from "../../../components/modalWindow/ModalWindow";
import Typewriter from 'typewriter-effect';
import {MyLink} from "../../../components/MyLink/MyLink";
import MotionMainSection from "./MotionMainSection";
import Snowfall from "react-snowfall";






export const MainSection: React.FC = () => {
    const [isOpenModalWindow, setIsOpenModalWindow] = React.useState(false);
    const openModalWindow = () => {
        setIsOpenModalWindow(true);
    }


    return (
        <MotionMainSection>
            <S.Background backgroundColor={theme.colors.primaryColor}/>
            <S.Background backgroundImage={photo}/>
            <S.MainInfo>
                <Container>
                    <FlexWrapper direction={'column'} justify={'center'} height={'80vh'}>
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
                                        typewriter.pauseFor(1000)
                                            .typeString('I’m Mariya')
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
                                        typewriter.pauseFor(2200)
                                            .typeString('Kushlianskaya')
                                            .start()
                                    }}
                                />
                            </S.MainSectionText>
                            <S.MainDescription>
                                <StyledDescription>I’am <S.Title> web developer</S.Title> who
                                    implements any requests from creating responsive websites to developing
                                    user-friendly applications</StyledDescription>
                                <S.ButtonsWrapper>
                                    <MyButton text={'Email me'} iconId={"envelope"} padding={"20px 43px"}
                                              backgroundColor={"rgba(103, 108, 219, 1)"} onClick={openModalWindow}/>

                                    <MyLink iconId={"download"} linkText={'See my cv'}
                                            link={'https://drive.google.com/file/d/1wAb7xqZuvF1dAM-4KVhIjU3mDCHqQSgZ/view?usp=sharing'}/>
                                </S.ButtonsWrapper>
                                <ModalWindow isOpen={isOpenModalWindow} setIsOpen={setIsOpenModalWindow}/>
                            </S.MainDescription>
                        </FlexWrapper>
                    </Container>
                </S.MainInfo>
        </MotionMainSection>
    )
};

