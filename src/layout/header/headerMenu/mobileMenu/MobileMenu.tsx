import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles'
import {MyButton} from "../../../../components/button/Button";
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickButton = () => {
        setIsOpen(!isOpen)
    }

  return (
      <S.MobileMenu>
          <S.BurgerButton isOpen={isOpen} onClick={onClickButton}>
              <span/>
          </S.BurgerButton>
          <S.MobilePopup isOpen={isOpen} onClick = {() => setIsOpen(false)}>
              <S.StyledMenu>
                  <Menu/>
              </S.StyledMenu>
              <MyButton text={"Contact Me"} padding={"10px 20px"} backgroundColor={"rgba(103, 108, 219, 1)"}/>
          </S.MobilePopup>
      </S.MobileMenu>

  );
};








