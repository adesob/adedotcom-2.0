import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import './App.css';
import SplashContainer from './components/SplashContainer'
import ProjContent  from './components/ProjContent'



const App = () => {
  
  const [apiState, setApiState] = useState({ apiResponse: "" });
  const [showProjects, setShowProjects] = useState(false);
  const[projects, setProjects] = useState([]);

  useEffect(() => {
    
    // Running particle.js Script 
    const script = document.createElement('script');
    script.src = "particles.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }

  }, []);


  //API test method
  const callAPI = () => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiState({ apiResponse: res }));
  }

  

  return (
    <div className = "App">

      {/* <p>{apiState.apiResponse}</p> */}

      <div id="particles-js"></div>
        <SplashContainer p = {projects} projectsStat = {showProjects} projectsClick = {() => {
                                                  console.log('hello bud');
                                                  setShowProjects(true);
                                                }
                                          } 
        />
                                           
        {/* {showProjects && <Projects/>} */}
    </div>
  )
}

export default App;
