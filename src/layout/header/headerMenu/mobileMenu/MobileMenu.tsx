import React, {useEffect, useState} from 'react';
import {S} from '../HeaderMenu_Styles'
import {MyButton} from "../../../../components/button/Button";
import {Menu} from "../menu/Menu";
import {ModalWindow} from "../../../../components/modalWindow/ModalWindow";


export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [isClickLink, setIsClickLink] = useState(false);

    const handleClickLink =() =>{
        setIsClickLink(true)
    }

    useEffect(() => {
        if(!isOpen){
            setIsClickLink(false)
        }
    }, [isOpen]);

    useEffect(() => {
        if(isClickLink){
            setIsOpen(false)
        }
    }, [isClickLink]);

    const onClickButton = () => {
        setIsOpen(!isOpen)
    }
    const onClickContactButton = () => {
        setIsOpenModalWindow(true)
    }

    const closePopup = (event:any) => {
        const isOutside = !event.target.closest("button");
        if(isOutside){
            setIsOpen(false);
        }
    }

  return (
      <S.MobileMenu>
          <S.BurgerButton isOpen={isOpen} onClick={onClickButton}>
              <span/>
          </S.BurgerButton>
          <S.MobilePopup isOpen={isOpen} onClick = {(event) => closePopup(event)}>
                  <S.StyledMenu >
                      <Menu handleClick={handleClickLink}/>
                  </S.StyledMenu>
                  <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"} onClick={onClickContactButton} id="button"/>
          </S.MobilePopup>
          <ModalWindow isOpen={isOpenModalWindow} setIsOpen={setIsOpenModalWindow}/>
      </S.MobileMenu>

  );
};







