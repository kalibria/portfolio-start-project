import './App.css';
import {Footer} from 'src/layout/footer/Footer';
import {Connect} from 'src/layout/sections/connect/Connect';
import {MainSection} from 'src/layout/sections/mainSection/MainSection';
import {Projects} from 'src/layout/sections/projects/Projects';
import styled from 'styled-components';
import {Skills} from './layout/sections/skills/Skills';
import {Header} from './layout/header/Header';
import {GoTopBtn} from "./goTopBtn/GoTopBtn";



function App() {
    return (
        <StyledMain className="App">
            <Header/>
            <MainSection/>
            <Skills/>
            <Projects/>
            <Connect/>
            <Footer/>
            <GoTopBtn/>
        </StyledMain>
    );
}

export default App;

const StyledMain = styled.main`
    background-color: rgba(34, 42, 54, 0.95);
    width: 100vw;
`


