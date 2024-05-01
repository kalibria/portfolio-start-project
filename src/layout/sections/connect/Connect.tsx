import React from 'react';
import {Container} from 'src/components/container/Container';
import {Form} from 'src/components/form/Form';
import {GridWrapper} from 'src/components/wrapper/GridWrapper';
import {theme} from 'src/styles/Theme';
import styled from 'styled-components';
import { Slogan } from 'src/layout/sections/connect/Slogan';

export const Connect = () => {
  return (
    <StyledConnect>
      <Container>
        <GridWrapper columns={"1fr 1fr"} rows={"1fr"} >
          <Slogan/>
          <Form/>
        </GridWrapper>
      </Container>
    </StyledConnect>

  );
};


const StyledConnect = styled.div`
  padding: 100px 0;
  background-color: ${theme.colors.secondaryColor};
`
