import React from 'react';
import {Form} from "../form/Form";
import {S} from "../../layout/header/headerMenu/HeaderMenu_Styles";

type ModalWindowProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalWindow:React.FC<ModalWindowProps> = ({isOpen, setIsOpen}:ModalWindowProps) => {

    const handleClickModalWindow = (event: any) => {
        const isOutside = !event.target.closest("#form");
        if (isOutside) {
            setIsOpen(false);
        }
    }
    return (
        <S.ModalWindow onClick={(event) => handleClickModalWindow(event)} id="modal-window" isOpen={isOpen}>
            <Form id={"form"}/>
        </S.ModalWindow>
    );
};

