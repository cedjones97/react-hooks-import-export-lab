import React from "react";
import * as User from '../data/user'


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={User.image} alt="I made this" />
    </div>
  );
}

export default About