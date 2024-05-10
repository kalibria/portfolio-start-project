import React from 'react';
import {MENU_ITEMS} from 'src/variables';
import {S} from '../HeaderMenu_Styles'


export const Menu = () => {
const listItems = MENU_ITEMS.map((item)=>{
  return <S.LinkItem key={item}><S.Link href={item}>{item}</S.Link>
    <S.Mask><span>{item}</span></S.Mask>
    <S.Mask><span>{item}</span></S.Mask>
  </S.LinkItem>
})
  return (
    <S.Menu>
      <ul>
        {listItems}
      </ul>
    </S.Menu>
  );
};

