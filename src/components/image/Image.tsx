import React from 'react';
import styled from 'styled-components';

type ImagePropsType = {
  src: string
  alt: string
}

export const Image = ({src, alt}: ImagePropsType) => {
  return <img src={src} alt={alt}/>
};


const StyledImage = styled.image`
  width: 100%;
  height: 260px;
`
