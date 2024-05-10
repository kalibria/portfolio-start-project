import React from 'react';
import {Container} from 'src/components/container/Container';
import {Icon} from 'src/components/icon/Icon';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MY_SKILLS} from 'src/variables';
import {S} from './Skills_Styles'

export const Skills = () => {
  const listSkills = MY_SKILLS.map((skill) => {
    return <Icon key={skill} iconId={skill} width={'100px'} height={"100px"}/>
  })
  return (
    <S.SkillsSection>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} grow={1}>
          {listSkills}
        </FlexWrapper>
      </Container>
    </S.SkillsSection>
  );
};


