import React from 'react';
import styled from 'styled-components';
import {MENU_ITEMS} from 'src/variables'

export const Menu = () => {
const listItems = MENU_ITEMS.map((item)=>{
  return <li key={item}><a href={item}>{item}</a></li>
})
  return (
    <StyledMenu>
      <ul>
        {listItems}
      </ul>
    </StyledMenu>
  );
};
const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 40px;
    font-weight: 500;
    font-size: 20px;
  }
`
