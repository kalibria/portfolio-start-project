import React from 'react';
import {CardDescription} from 'src/components/cardDescription/cardDescription';
import {CardTitle} from 'src/components/cardTitle/CardTitle';
import {Image} from 'src/components/image/Image';
import image1 from 'src/assets/images/image1.png'
import image2 from 'src/assets/images/image2.png'
import image3 from 'src/assets/images/image3.png'
import image4 from 'src/assets/images/image4.png'
import image5 from 'src/assets/images/image5.png'
import image6 from 'src/assets/images/image6.png'
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MyLink} from 'src/layout/sections/projects/MyLink';
import styled from 'styled-components';


export const Card = () => {
  return (
    <StyledCard>
      <Image src={image1} alt={"imag1"}/>
      <CardTitle title={"Project Tile goes here"}/>
      <CardDescription text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
      <CardDescription text={"Tech stack : HTML , JavaScript, SASS, React"}/>
      <FlexWrapper justify={"space-between"}>
        <MyLink iconId={"chain"} linkText={"Live Preview"}/>
        <MyLink iconId={"githublink"} linkText={"View Code"}/>
      </FlexWrapper>

    </StyledCard>
  );
};


const StyledCard = styled.div`
  width: 373px;
  min-height: 567px;
  background-color: rgba(54, 54, 54, 1);
  color: rgba(204, 204, 204, 1);
  border-radius: 20px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
`


