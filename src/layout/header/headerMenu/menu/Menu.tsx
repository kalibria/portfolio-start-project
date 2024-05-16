import React from 'react';
import {MENU_ITEMS} from 'src/variables/variables';
import {S} from '../HeaderMenu_Styles'


export const Menu: React.FC = () => {
    const listItems = MENU_ITEMS.map((item) => {
        return <S.LinkItem key={item.title}><S.NavLink to={item.href} smooth={true} activeClass="active" spy={true}>{item.title}
        </S.NavLink>
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

