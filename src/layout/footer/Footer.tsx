import {S} from './Footer_Styles'
import React from "react";

export const Footer:React.FC = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <p>Created by <span>Maria Kushlianskaya</span></p>
      <span>&copy; {startYear === currentYear ? startYear : `${startYear} - ${currentYear}`}</span>
    </S.Footer>
  );
};


