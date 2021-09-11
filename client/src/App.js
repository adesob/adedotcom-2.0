import {BrowserRouter as Router, Route} from 'react-router-dom'
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
    <Router>
      <div className = "App">        
                                            
          {/* {showProjects && <Projects/>} */}
          
              <div id="particles-js"></div>

              
              <SplashContainer  p = {projects} 
                                projectsStat = {showProjects} 
                                projectsClick = {() => {
                                                        console.log('hello bud');
                                                        setShowProjects(true);
                                                      }
                                                } 
              /> 

      </div>

    </Router> 
  )
}

export default App;
