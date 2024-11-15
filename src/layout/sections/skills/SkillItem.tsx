import {S} from "./Skills_Styles";
import React from "react";

type Props = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    description: string
}

export const SkillItem = ({Icon, description}: Props) =>{
    return (
        <S.SkillItemWrapper>
            <Icon width={'100'} height={'100'}/>
            <p>{description}</p>
        </S.SkillItemWrapper>

    )
}