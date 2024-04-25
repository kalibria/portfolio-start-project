import React from 'react';
import {Form} from 'src/components/form/Form';
import {GridWrapper} from 'src/components/wrapper/GridWrapper';
import styled from 'styled-components';
import { Slogan } from 'src/layout/sections/connect/Slogan';

export const Connect = () => {
  return (
    <StyledConnect>
      <GridWrapper columns={"1fr 1fr"} rows={"1fr"} >
        <Slogan/>
        <Form/>
      </GridWrapper>
    </StyledConnect>

  );
};


const StyledConnect = styled.div`
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);

`
