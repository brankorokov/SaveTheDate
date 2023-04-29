import React, { Component } from "react";
import { Grid } from "@mui/material";

export class ItineraryObject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timeParts = this.props.time.split("-");
    const startTimeParts = timeParts[0];
    const endTimeParts = timeParts[1];

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
