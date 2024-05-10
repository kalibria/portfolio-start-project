import styled from "styled-components";


const Header = styled.header`
  width: 100%;
  background-color: transparent;
  padding: 20px 0;
  
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 999;
`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


export const S = {
    Header,
    MenuWrapper
}