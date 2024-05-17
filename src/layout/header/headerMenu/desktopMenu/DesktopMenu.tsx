import React, {useState} from 'react';
import {Container} from "../../../../components/container/Container";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {MyButton} from "../../../../components/button/Button";
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';
import {ModalWindow} from "../../../../components/modalWindow/ModalWindow";




export const DesktopMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.DesktopMenu>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Menu/>
                    <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"}
                              onClick={handleClick}/>
                    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}/>
                </FlexWrapper>
            </Container>
        </S.DesktopMenu>

    );
};


