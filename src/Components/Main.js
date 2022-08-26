import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data";

let card = Data.map((val) => {
  return (
    <HornedBeast key={val._id} title={val.title} img={val.image_url} des={val.description} />
  );
});

class Main extends React.Component {
  render() {
    return (
      <>
        <div class="wrapimg">{card}</div>
      </>
    );
  }
}

export default Main;
