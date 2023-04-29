import React, { Component } from "react";
//test
import weddingPic from "../Assets/images/Overhead-Dubrovnik.jpg";
import paraglidePic from "../Assets/images/Paraglide.jpg";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { Itinerary } from "./Itinerary";
import { LinkButton } from "../components/LinkButton";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            this.setState({ isVisible: true });
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  componentDidMount() {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => this.observer.observe(el));
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="col-12">
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
            />
            <div id="LandingMainDiv">
              <h1 id="NameDiv">Roko & Nicole</h1>
              <p id="Date">
                06<span className="DatePole">|</span>02
                <span className="DatePole">|</span>2023
              </p>
              <p id="Location">Dubrovnik, Croatia</p>
            </div>
            <div id="DownArrow" style={{}}>
              <LinkButton UpOrDown={"DOWN"} LinkTo="nextSection"></LinkButton>
            </div>
          </div>
        </Element>

        <Element name="nextSection">
          <div
            id="NextSectionDiv"
            className={"hidden col-12"}
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
                  <button className="card-button">
                    <p className="cardButtonText">Take me there!</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element id="overflow" name="overflow"></Element>
      </div>
    );
  }
}
