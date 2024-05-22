import React from "react";

class FactTitle extends React.Component {
  render() {
    return (
      <>
        <strong>{this.props.quote}</strong>
        <p>{this.props.author}</p>
      </>
    );
  }
}

export default FactTitle;
