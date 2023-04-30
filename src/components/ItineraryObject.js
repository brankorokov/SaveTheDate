import React, { Component } from "react";

export class ItineraryObject extends Component {

  render() {
    return (
      <div className={"itineraryObject"}>
        <div className={"timeDiv"}>{this.props.time}</div>
        <div style={{ textAlign: "center", fontFamily: "Proxima Nova Rg" }}>
          {this.props.event}
        </div>
        <hr style={{}}></hr>
      </div>
    );
  }
}
