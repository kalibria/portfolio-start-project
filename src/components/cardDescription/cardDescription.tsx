import React from 'react';

type CardDescriptionPropsType = {
  text: string
}

export const CardDescription = ({text}: CardDescriptionPropsType) => {
  return <p>{text}</p>
};
