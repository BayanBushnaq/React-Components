import React from 'react'

class HornedBeast extends React.Component{
    render(){
        return(
            <>
        <h3>The title of HornedBeast is : {this.props.title}</h3>
        <img src={this.props.img_url}></img>
        <h3>The Description for HeadBeast is :{this.props.description}</h3>
        </>
    )}



}
export default HornedBeast;