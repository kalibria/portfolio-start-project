import React from 'react';

type CardTitlePropsType = {
  title: string
}

export const CardTitle = ({title}: CardTitlePropsType) => {
  return <h1>{title}</h1>
};
