import React, { Component } from 'react'

class HogCard extends Component{

    clickHandle = (event) => {
        console.log(event.target)
    }

    render(){
        let lowerPig = this.props.name.toLowerCase()
        let pigImg = lowerPig.split(" ").join("_")
        
        return(
            <div className="pigTile" onClick={this.clickHandle}>
                <img src={`./src/hog-imgs/${pigImg}.jpg`} alt="hogPic" />
                
                {this.props.name}

            </div>
        )
    }
}

export default HogCard