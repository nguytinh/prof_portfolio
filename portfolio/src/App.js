import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Animatedroutes from "./components/Animatedroutes";

function App() {
  return (
    <div className='font'>
      <Router>
        <NavigationBar />
        <Animatedroutes />
      </Router>
    </div>
  );
}

export default App;
