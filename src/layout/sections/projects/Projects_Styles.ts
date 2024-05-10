import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Projects = styled.div`
  width: 100%;
  padding: 100px 0;
  
  @media ${theme.media.mobile} {
    padding: 60px 0;
  }
`


const MyLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & a {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  

`

export const S = {
    Projects,
    MyLink
}