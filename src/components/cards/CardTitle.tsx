import React from 'react';

type CardTitlePropsType = {
  title: string
}

export const CardTitle = ({title}: CardTitlePropsType) => {
  return <h3>{title}</h3>
};
