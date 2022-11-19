import React  from 'react';
import Home from './components/Home';
import ShoesList from "./components/ShoesList"
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Nav from './components/Nav';
import AddShoes from './components/AddShoes';


const App = () => {
  return (
    <center>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shoesList" element={<ShoesList/>} />
          <Route path="/addshoes" element={<AddShoes/>}/>
        </Routes> 
    </center>
  );
}

export default App;
