import React, { Component } from "react";
import { Link } from "react-scroll";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

    
function UpOrDownLink(input) {
  if (input === "UP") {
    return (
      <FaChevronUp
        size={"3em"}
        style={{ color: "black", fontWight: "lighter" }}
      />
    );
  }
  else{
    return (
        <FaChevronDown
          size={"3em"}
          style={{ color: "black", fontWight: "lighter" }}
        />
      );
  }
}

export class LinkButton extends Component {

  render() {
    return (
      <Link
        className="NavArrow"
        to={this.props.LinkTo}
        spy={true}
        duration={600}
        smooth={true}
      >
        {UpOrDownLink(this.props.UpOrDown)}
        
      </Link>
    );
  }
}
