import React from 'react'
import {Link} from 'react-router-dom'

const ProjContent = (props) => {
    
    
    
    return (
        <div id={"item" + props.itemNum} className="items">
            <div id={"imageBx"+ props.itemNum} className="imageBx">
                <img id={"pic" + props.itemNum} className="pic" src={"/proImages/" + props.project.title + ".jpg"}></img>
                <div  id={"description" + props.itemNum} className="description">
                    <p id={"explan" + props.itemNum} className="explan"> {props.project.description}</p>
                    <p id={"techUsed" + props.itemNum} className="techUsed" >{props.project.techStack}</p>
                    <a href={props.project.url} target="_blank" className="gitLink" id={"gitLink" + props.itemNum}><i className="fa fa-external-link" id="link" aria-hidden="true"></i></a>
                </div>
            </div>
        
            <h1 id={"projectName" + props.itemNum} className="projectName">{props.project.title}</h1>
            {props.itemNum === 1 && <div id = "prTitle">
                                        <div><Link to="/" id = "bkBtn" onClick = {() => { 
                                                                    // props.projectsClick(); 
                                                                    props.statChange();
                                                                    }}><i class="fa fa-long-arrow-left" aria-hidden="true"></i></Link></div>
                                        <div><h1 id = "pgTitle"> Projects</h1></div>
                                    </div>
                                    }
    </div>
    )
}

export default ProjContent
