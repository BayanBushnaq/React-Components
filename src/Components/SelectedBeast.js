import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        {/* <Button variant="primary" onClick={this.props.showModal}>
          Click Here To Display The Image 
        </Button> */}

        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.SelectedBeastData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.SelectedBeastData.img}></img>
          </Modal.Body>
          <Modal.Footer>
          <Modal.Text>{this.props.SelectedBeastData.des}</Modal.Text>
            <Button variant="secondary" onClick={this.props.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
