import './App.css';
import { Navbar } from './Components/Navbar';
import {Myroutes} from "./Router/Routes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Myroutes/>
    </div>
  );
}

export default App;
