import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfLikes:  ''
    }
  }
  incnumOfLikes = () => {
    this.setState({
      numOfLikes: this.state.numOfLikes + '💖',
    })
  }
  render() {
    return (
      <>
      
        <Card style={{ width: "18rem" }} clasee="cards">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.img}
              onClick={this.incnumOfLikes}
            />
            <Card.Text>{this.props.des}</Card.Text>
            <Card.Text>Favorite :{this.state.numOfLikes}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HornedBeast;
