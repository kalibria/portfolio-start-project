import './App.css';
import {StyledHeader} from './components/StyledHeader';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <StyledHeader/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
