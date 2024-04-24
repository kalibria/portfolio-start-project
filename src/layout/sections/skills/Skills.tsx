import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper justify={"space-around"} align={"center"} grow={1}>
        <Icon iconId={'css'} width={'100px'} height={"100px"}/>
        <Icon iconId={'figma'} width={'100px'} height={"100px"}/>
        <Icon iconId={'react'} width={'100px'} height={"100px"}/>
        <Icon iconId={'sass'} width={'100px'} height={"100px"}/>
        <Icon iconId={'html5'} width={'100px'} height={"100px"}/>
      </FlexWrapper>
    </StyledSkills>

  );
};


const StyledSkills = styled.section`
  background-color: #000000;
  min-height: 200px;
  display: flex;
  justify-content: center;
 
`
