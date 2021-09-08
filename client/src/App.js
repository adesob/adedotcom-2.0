import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import './App.css';



const App = () => {
  
  const [apiState, setApiState] = useState({ apiResponse: "" });

  useEffect(() => {
    
    // Api Test
      // callAPI();
    
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
  
      <section id="main">
      <div id="particles-js"></div>
      <div className ="homeContainer">
          
          {/* <div id="avatar">
              <img src="IMG_9402.JPG" alt="alternate description here"/>
          </div> */}
          
          
          <div className = "contentBx">
              <h1>Hi! <span> I'm Ade</span> </h1>  
          </div>

          


          <div className = "infoBx">
              <img src = "illus.svg"></img>
              <p>I'm currently in my final year studying Electrical Engineering and Computing Technology. I enjoy bridging hardware and software to develop solutions to problems. I keep my passion ignited by learning and applying—working on projects and competing in hackathons.</p>
              <div className="socials"> 
                  <a href="https://ca.linkedin.com/in/ade-sobodu" id = "linkedin-av" target = "_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <div id="linkedin" className="hidden">LinkedIn</div>

                  <a href="https://github.com/adesob" id = "github-av" target = "_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                  <div id="github" className="hidden">Github</div> 

                  <a href="resume-website-placeholder.pdf" id = "resume-av" target = "_blank"><i className="fa fa-address-card" aria-hidden="true"></i></a>
                  <div id="resume" className="hidden">Resume</div>

                  <a href="#" id = "projects-av"><i className="fa fa-code-fork" aria-hidden="true"></i></a>
                  <div id="projects" className="hidden">Projects</div>
                  
              </div>
          </div>

      </div>
  </section>

    </div>
  )
}

export default App;
