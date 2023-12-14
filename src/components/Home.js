import React from "react";
import { name, city } from "../data/data.js";

function Home() {

  const divStyle = {
    color : "firebrick"
  };

  return (
  <div id="home">Home
    <h1 style={divStyle}>{name} is a Web Developer from {city}</h1>
  </div>)
}

export default Home;
