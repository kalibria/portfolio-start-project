import React from 'react';
import {Container} from "../../../../components/container/Container";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {MyButton} from "../../../../components/button/Button";
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'



export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} >
                    <Menu/>
                    <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
                </FlexWrapper>
            </Container>
        </S.DesktopMenu>

    );
};

