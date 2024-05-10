import React from 'react';
import {Container} from 'src/components/container/Container';
import {Form} from 'src/components/form/Form';
import {theme} from 'src/styles/Theme';
import styled from 'styled-components';
import { Slogan } from 'src/layout/sections/connect/Slogan';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const Connect = () => {
  return (
    <StyledConnect>
      <Container>
          <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={"20px"}>
              <Slogan/>
              <Form/>
          </FlexWrapper>
      </Container>
    </StyledConnect>

  );
};


const StyledConnect = styled.div`
    padding: 100px 0;
    background-color: ${theme.colors.secondaryColor};
    
    @media ${theme.media.mobile} {
        padding: 60px 0;
    }
`
