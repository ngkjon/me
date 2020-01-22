import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div>
          <img className="project-image" src={props.image} alt="Project Image"/>
        </div>
        <div className="txt project-title">{props.title}</div>
        <div className="txt project-category">{props.category}</div>
            </Link>
    </div>
  )
}
 
export default Thumbnail;