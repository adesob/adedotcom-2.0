import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import SplashContent from './SplashContent'
import SplashInfo from './SplashInfo'
import ProjContent from './ProjContent'

const SplashContainer = (props) => {
    const [contState, setContState] = useState(props.projectStat);
    const [projState, setProjState] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
      const getProjects = async () => {
        const projectsFromServer = await fetchProjects();
        setProjects(projectsFromServer);
        console.log('projects gotten', projects);
      }

      getProjects()
    }, [])

    
    const fetchProjects = async () => {
      const res = await fetch('http://localhost:9000/projects')
      const data = await res.json();
      return data
    }

    return (
      // Set className dependent on state of Splash Container
        <div className = {`${!contState ? "homeContainer" : "projectsContainer"}`}>
          
           {/*Render content  */}
          {!contState && <SplashContent/>}
          {!contState && <SplashInfo statChange = {() => {setContState(!contState)}} 
                                      projectsClick = {props.projectsClick}
                          />
          }

          {/* Render Projects */}
            {contState &&
              (projects.map((project, index) => <ProjContent statChange = {() => {setContState(!contState)}} key = {index} itemNum = {index + 1} project = {project}/>)) 
            }
            
          
        </div>     
    )
}

export default SplashContainer
