import './App.css';
import {Main} from 'src/layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {Header} from './layout/header/Header';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skills/>
        </div>
    );
}

export default App;


