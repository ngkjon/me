import React from 'react';
import Thumbnail from './thumbnail.js'; // Import the Thumbnail component
import '../App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1 class="txt title">Projects</h1>
      <Thumbnail
        link=""
        image={require("../resources/hq.jpg")}
        title="HQ Trivia Solver"
        category=""
      />
      <Thumbnail
        link=""
        image={require("../resources/spotify.jpg")}
        title="Spotify Artist Case Study"
        category=""
      />
    </div>
  )
}
 
export default Projects;