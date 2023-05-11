import React, { Component } from "react";
import weddingPic from "../Assets/images/Overhead-DubrovnikCompressed.jpg";
import paraglidePic from "../Assets/images/ParaglideCompressed.jpg";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { LinkButton } from "../components/LinkButton";
//test
export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Element name="firstSection">
          <div
            style={{
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              height: "calc(100vh)",
              bottom: "15%",
            }}
          >
            <img
              src={weddingPic}
              style={{
                width: "100%",
                height: "calc(100vh)",
                objectFit: "cover",
                bottom: "15% !important",
              }}
              alt=""
            />
            <div id="LandingMainDiv">
              <h4 id="NameDiv">Roko & Nicole</h4>
              <p id="Date">
                06<span className="DatePole">|</span>03
                <span className="DatePole">|</span>2023
              </p>
              <p id="Location">Komarna, Croatia</p>
            </div>
            <div id="DownArrow" style={{}}>
              <LinkButton UpOrDown={"DOWN"} LinkTo="overflow"></LinkButton>
            </div>
          </div>
        </Element>

        <Element name="nextSection">
          <div
            id="NextSectionDiv"
            style={{
              width: "100%",
              height: "calc(100vh)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div id="UpArrow" style={{}}>
              <LinkButton UpOrDown={"UP"} LinkTo="firstSection"></LinkButton>
            </div>
            <img
              src={paraglidePic}
              style={{
                width: "100%",
                height: "calc(100vh)",
                objectFit: "cover",
              }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                width: "80%",
              }}
            >
              <div className="cardContainer" style={{}}>
                <div style={{}} className={"card"}>
                  <h2 className={"card-title"}>Itinerary</h2>
                  <p className={"card-text"}>
                    Find out what's in store for the big day
                  </p>

                  <Link to="/Itinerary">
                    <button className="card-button">
                      <p className="cardButtonText">Take me there!</p>
                    </button>
                  </Link>
                </div>
                <div style={{}} className={"card"}>
                  <h2 className={"card-title"}>Registry</h2>
                  <p className={"card-text"}>
                    Find our hand picked registry items here
                  </p>
                  <Link to="https://www.amazon.com/wedding/nicole-mcintosh-roko-jelavi%C4%87--june-2023/registry/20GNQLCHOZQXN">
                    <button className="card-button">
                      <p className="cardButtonText">Take me there!</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="overflow"></Element>
      </div>
    );
  }
}
