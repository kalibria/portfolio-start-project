import React from 'react';
import {Container} from 'src/components/container/Container';
import {Icon} from 'src/components/icon/Icon';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MY_SKILLS} from 'src/variables/variables';
import {S} from './Skills_Styles'


export const Skills = () => {
  const listSkills = MY_SKILLS.map((skill) => {
      return <S.IconWrapper key={skill} ><Icon  iconId={skill} width={'100px'} height={"100px"} viewBox={"0 0 100 100"}/></S.IconWrapper>



  })
  return (
    <S.SkillsSection id={"skills"}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} grow={1}>
            <S.IconsContainer>
                <S.Icons>
                    {listSkills}
                    {listSkills}
                </S.Icons>
            </S.IconsContainer>
        </FlexWrapper>
      </Container>
    </S.SkillsSection>
  );
};

