import styled from "styled-components";

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
    MyLink
}