import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from "react";
import About from './about'
import Home from "./home";



function App() {
    let home = "/";
    let about = "/about"
  return (

    <BrowserRouter>
        <header>
            <nav>
                <Link to={home}>#VANLIFE</Link>
                <Link to={about}>About</Link>
            </nav>
        </header>
        <Routes>
            <Route  path={home} element={<Home />}/>
            <Route  path={about} element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
