import React from 'react';
import {Container} from 'src/components/container/Container';
import {Form} from 'src/components/form/Form';
import { Slogan } from 'src/layout/sections/connect/Slogan';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {S} from './Connect_Styles'

export const Connect:React.FC = () => {
  return (
    <S.Connect>
      <Container>
          <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={"20px"}>
              <Slogan/>
              <Form/>
          </FlexWrapper>
      </Container>
    </S.Connect>

  );
};


