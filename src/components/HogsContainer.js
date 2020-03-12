import React, { Component } from "react";
import HogCard from './HogCard.js'

class HogsContainer extends Component {
  
  generateHog = () => {
    return this.props.hogs.map(hog => (
      <HogCard name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']}/>
    ))
  }

  render() {
    
    
    return (
      <div>
        {this.generateHog()}
      </div>
    );
  }
}

export default HogsContainer;
