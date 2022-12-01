import React from "react";

import kairow from "./assets/kairow.jpg";

export default class Kairow extends React.Component {
  componentWillUnmount() {
    this.props.myUniverse.pause();
  }

  render() {
    return (
      <>
        <img src={kairow} />
      </>
    );
  }
}
