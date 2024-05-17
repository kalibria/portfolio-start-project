import React, {useState} from 'react';
import {Container} from "../../../../components/container/Container";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {MyButton} from "../../../../components/button/Button";
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';
import {Form} from "../../../../components/form/Form";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";


export const DesktopMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleClickModalWindow = (event: any) => {
        const isOutside = !event.target.closest("#form");
        if (isOutside) {
            setIsOpen(false);
        }
    }

    return (
        <S.DesktopMenu>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Menu/>
                    <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"}
                              onClick={handleClick}/>
                    {isOpen &&
                        <ModalWindow onClick={(event) => handleClickModalWindow(event)} id="modal-window" isOpen={isOpen}>
                            <Form id={"form"}/>
                        </ModalWindow>
                    }
                </FlexWrapper>
            </Container>
        </S.DesktopMenu>

    );
};

const ModalWindow = styled.div<{isOpen:boolean}>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0 0 0 / 0.8);
    transform: translateY(-100%);
    transition: .8s ease-in-out;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);
    `}
`

const FormWrapper = styled.div`

`