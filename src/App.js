
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Work></Work>
    </div>
  );
}

export default App;
