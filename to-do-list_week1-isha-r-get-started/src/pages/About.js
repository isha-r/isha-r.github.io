import React, { Component } from 'react';
import "./About.css";
import ir from "../assets/ir.jpg";

export default class About extends Component {
  render() {
    return (
      //<div>
      //  <p>Design your About me page </p> 
      //</div>
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          //className="profile_image"
          src={ir}
          alt="Profile Pic">

          </img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Isha Rustagi</div>
        <div className="brief_description">
        Directed undergraduate student pursuing a Bachelor of Science focused in Computer Science from University of Wisconsin-Madison. 
        </div>
      </div>
    </div>
  </div>

    )
  }
}