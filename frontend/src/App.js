import React from "react";
import { useEffect, useState } from 'react';
import  { Routes, Route } from "react-router-dom";
import Navbar  from './Navbar';
import BeanieBabies from "./pages/beaniebabies/BeanieBabies";
import Collectors from "./pages/collectors/Collectors";
import Collector from "./pages/collector/Collector";
import Home from "./pages/home/Home";
import "./index.css"
import background from "./assets/silver-glitter-background.jpg"


function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [collectors, setCollectors] = useState([]);
 
    useEffect(() => {
      fetch("http://localhost:9292/collectors")
      .then(r => r.json())
      .then(collectors => {
        setCollectors(collectors)
        let beanieBabiesArray = []
        collectors.map(c => {
          c.beanie_babies.map(b =>{
            beanieBabiesArray.push(b)
            setBeanieBabies(beanieBabiesArray)
          })
        })
      });
    }, []);

  const backgroundStyle={
    backgroundImage:`url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundRepeat:"no-repeat",
    backgroundSize: 'cover',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
    };

  return (
    <div className="App" style={backgroundStyle}>
      <div className="app-container">
        <div className="content-wrap">
          <h1 className="star" id="star-1">★</h1>
          <h1 className="title">Beanie Baby Dealership</h1>
          <h1 className="star" id="star-2">★</h1>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/collectors" element={<Collectors collectors={collectors} setCollectors={setCollectors} />}/>
            <Route path="/collectors/:id" element={<Collector collectors={collectors} setCollectors={setCollectors} />}/>
            <Route exact path="/beaniebabies" element={<BeanieBabies beanieBabies={beanieBabies}/>}/>
          </Routes>
        </div>
        <footer>
          <a className="background-credit" href="https://www.freepik.com/free-photo/silver-glitter-background_3686887.htm#query=glitter&position=5&from_view=search&track=sph">Image by rawpixel.com on Freepik</a> 
        </footer>
      </div> 
    </div>
  )
}

export default App;