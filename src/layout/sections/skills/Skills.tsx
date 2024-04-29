import React from 'react';
import {Icon} from 'src/components/icon/Icon';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import {MY_SKILLS} from 'src/variables';

export const Skills = () => {
  const listSkills = MY_SKILLS.map((skill) => {
    return <Icon key={skill} iconId={skill} width={'100px'} height={"100px"}/>
  })
  return (
      <FlexWrapper justify={"space-around"} align={"center"} grow={1} backgroundColor={"rgba(0, 0, 0, 1)"} minHeight={"200px"}>
        {listSkills}
      </FlexWrapper>
  );
};

