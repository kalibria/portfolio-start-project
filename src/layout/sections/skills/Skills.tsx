import React from 'react';
import {Container} from 'src/components/container/Container';
import {Icon} from 'src/components/icon/Icon';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MY_SKILLS} from 'src/variables/variables';
import {S} from './Skills_Styles'
import styled, {keyframes} from "styled-components";

export const Skills = () => {
  const listSkills = MY_SKILLS.map((skill) => {
      return <IconWrapper key={skill} ><Icon  iconId={skill} width={'100px'} height={"100px"} viewBox={"0 0 100 100"}/></IconWrapper>



  })
  return (
    <S.SkillsSection id={"skills"}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} grow={1}>
            <IconsContainer>
                <Icons>
                    {listSkills}
                    {listSkills}
                </Icons>
            </IconsContainer>

        </FlexWrapper>
      </Container>
    </S.SkillsSection>
  );
};

const scrollLeft =  keyframes `
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`
const IconsContainer = styled.div`
    width: 100%;
    overflow: hidden;
`

const Icons = styled.div`
    display: flex;
    width: 200%; 
    animation: ${scrollLeft} 10s linear infinite;
    
    & > * {
        flex: 1 0 auto;
    }
`
const IconWrapper = styled.span`
    padding-left: 15px;
    padding-right: 15px;
    `