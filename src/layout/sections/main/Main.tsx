import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from 'src/components/wrapper/FlexWrapper';
import myPhoto from '../../../assets/images/myphoto.webp'

export const Main = () => {
  return (
    <StyledMain>
      {/*<StyledBackground backgroundColor={'rgba(34, 42, 54, 0.95)'}/>*/}
      {/*<StyledBackground backgroundImage={myPhoto}/>*/}
      <FlexWrapper direction={'column'}>
        <span>Hello!</span>
        <span>I’m Zarror Nibors</span>
        <div>
          <h1>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences for the web.</h1>
          <div>
            <button>Email me</button>
            <div>
              <a href={'#'}>Download CV</a>
            </div>
          </div>
        </div>

      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  
`

// type StyledBackgroundPropsType = {
//   backgroundColor?: string
//   backgroundImage?:string
//   // width: string
// }

// const StyledBackground = styled.div<StyledBackgroundPropsType>`
//   background-color: ${props => props.backgroundColor};
//   background-image: url(${props => props.backgroundImage});
//   object-fit: cover;
//   width: 50vw;
//   height: 80vh;
// `

