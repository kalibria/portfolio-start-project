import React from 'react';
import iconSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  fill?:string
}


export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
      <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 100 100"} fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
      </svg>

  );
};
