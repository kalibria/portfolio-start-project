import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Projects = styled.div`
  width: 100%;
  padding: 100px 0;
  
  @media ${theme.media.mobile} {
    padding: 60px 0;
  }
`


export const S = {
    Projects
}