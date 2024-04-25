import './App.css';
import {Connect} from 'src/layout/sections/connect/Connect';
import {Main} from 'src/layout/sections/main/Main';
import {Projects} from 'src/layout/sections/projects/Projects';
import {Skills} from './layout/sections/skills/Skills';
import {Header} from './layout/header/Header';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skills/>
          <Projects/>
          <Connect/>
        </div>
    );
}

export default App;


