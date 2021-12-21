import React from 'react'
import {Link} from 'react-router-dom'

const SplashInfo = (props) => {
    return (
        <div className = "infoBx">
              <div className = "cont" id = "cont1">
                <div id = "pBox">
                  <p> I'm currently in my final year studying Electrical Engineering and 
                      Computing Technology. I enjoy bridging hardware and software to develop solutions 
                      to problems. I keep my passion ignited by learning and applying—working on projects 
                      and competing in hackathons.
                  </p>
                </div>  
              </div>
                  
              <div className = "cont" id = "cont2">
                  <div id = "imgBox">
                      <img  id = 'img' src = "illus.svg"></img>
                    </div>
                  </div>
              <div className="cont" id = "cont3"> 
                  <a href="https://ca.linkedin.com/in/adesobodu" id = "linkedin-av" target = "_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <div id="linkedin" className="hidden">LinkedIn</div>

                  <a href="https://github.com/adesob" id = "github-av" target = "_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                  <div id="github" className="hidden">Github</div> 

                  <a href="resume-website-placeholder.pdf" id = "resume-av" target = "_blank"><i className="fa fa-address-card" aria-hidden="true"></i></a>
                  <div id="resume" className="hidden">Resume</div>

                  <Link to="/projects" id = "projects-av" onClick = {() => { 
                                                                    props.projectsClick(); 
                                                                    props.statChange();
                                                                    }}><i className="fa fa-code-fork" aria-hidden="true"></i></Link>
                  <div id="projects" className="hidden">Projects</div>
              </div>
        </div>
    )
}

export default SplashInfo
