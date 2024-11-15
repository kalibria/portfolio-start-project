import React from 'react';
import {Container} from 'src/components/container/Container';
import {S} from './Skills_Styles'
import {ReactComponent as HTMLIcon} from '../../../assets/images/svg/html-5-svgrepo-com.svg'
import {ReactComponent as CssIcon} from '../../../assets/images/svg/css3-svgrepo-com.svg'
import {ReactComponent as JSIcon} from '../../../assets/images/svg/js-svgrepo-com.svg'
import {ReactComponent as TSIcon} from '../../../assets/images/svg/typescript-icon-svgrepo-com.svg'
import {ReactComponent as ReactLIcon} from '../../../assets/images/svg/react-1-logo-svgrepo-com.svg'
import {ReactComponent as ReduxIcon} from '../../../assets/images/svg/redux-svgrepo-com.svg'
import {ReactComponent as GraphQLIcon} from '../../../assets/images/svg/graphql-svgrepo-com.svg'
import {ReactComponent as NextIcon} from '../../../assets/images/svg/next-dot-js-svgrepo-com.svg'
import {ReactComponent as StyledCompIcon} from '../../../assets/images/svg/styled-components-svgrepo-com.svg'
import {ReactComponent as FigmaIcon} from '../../../assets/images/svg/figma-svgrepo-com.svg'
import {ReactComponent as JestIcon} from '../../../assets/images/svg/jest-svgrepo-com.svg'
import {ReactComponent as StorybookIcon} from '../../../assets/images/svg/storybook-icon-svgrepo-com.svg'
import {ReactComponent as PostmanIcon} from '../../../assets/images/svg/postman-icon-svgrepo-com.svg'
import {ReactComponent as GitIcon} from '../../../assets/images/svg/git-svgrepo-com.svg'
import {ReactComponent as ApiIcon} from '../../../assets/images/svg/api-svgrepo-com.svg'
import {ReactComponent as ReactHookFormIcon} from '../../../assets/images/svg/react-hook-form-logo-only.svg';
import {ReactComponent as MUIIcon} from '../../../assets/images/svg/material-ui-svgrepo-com.svg'
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {SkillItem} from "./SkillItem";


export const Skills = () => {
  return (
    <S.SkillsSection id={"skills"}>
      <Container>
          <SectionTitle>Skills</SectionTitle>
          <S.SkillsWrapper>
              <SkillItem Icon={ReactLIcon} description={'React'}/>
              <SkillItem Icon={ReduxIcon} description={'RTK Query'}/>
              <SkillItem Icon={NextIcon} description={'Next.js'}/>
              <SkillItem Icon={GraphQLIcon} description={'GraphQL'}/>
              <SkillItem Icon={TSIcon} description={'TypeScript'}/>
              <SkillItem Icon={JSIcon} description={'JavaScript'}/>
              <SkillItem Icon={ApiIcon} description={'Rest API'}/>
              <SkillItem Icon={ReactHookFormIcon} description={'React Hook Form'}/>
              <SkillItem Icon={HTMLIcon} description={'HTML'}/>
              <SkillItem Icon={CssIcon} description={'CSS'}/>
              <SkillItem Icon={GitIcon} description={'Git'}/>
              <SkillItem Icon={JestIcon} description={'Jest'}/>
              <SkillItem Icon={PostmanIcon} description={'Postman'}/>
              <SkillItem Icon={MUIIcon} description={'MUI'}/>
              <SkillItem Icon={StorybookIcon} description={'Storybook'}/>
              {/*<SkillItem Icon={FigmaIcon} description={'Figma'}/>*/}
              <SkillItem Icon={StyledCompIcon} description={'StyledComponents'}/>
          </S.SkillsWrapper>
      </Container>
    </S.SkillsSection>
  );
};






