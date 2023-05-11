import React, { Component } from "react";
import itineraryPic from "../Assets/images/ItineraryPicCompressed.jpg";
import "./Itinerary2.css";
import { ItineraryObject } from "../components/ItineraryObject";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const itineraryObjects = [
  { Time: "3:30-4:30", Event: "Ceremony" },
  { Time: "4:30-5:30", Event: "Photos with Bride and Groom" },
  { Time: "6:00-7:00", Event: "Terra Madre Welcome: Drinks and Oysters" },
  { Time: "7:00-8:00", Event: "Hors d’Oeuvres and Salad" },
  { Time: "8:00-8:30", Event: "Sunset dancing" },
  {
    Time: "8:30-10:00",
    Event: "Dinner: Risotto, Choice of Lamb, Veal, Chicken, and Schnitzel",
  },
  { Time: "9:30-11:00", Event: "Dancing" },
  { Time: "11:00-1:00", Event: "Dessert" },
];

function RenderItinerary() {
  return (
    <>
      {itineraryObjects.map((object) => (
        <ItineraryObject time={object.Time} event={object.Event} />
      ))}
    </>
  );
}

export class Itinerary extends Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  render() {
    return (
      <div>
        <Link id="LeftArrow" to="/" style={{ position: "absolute", top: 20, left: 20 }}>
          <FaChevronLeft
            size={"2em"}
            style={{ color: "black", fontWight: "lighter" }}
          />
        </Link>
        <img
          src={itineraryPic}
          style={{
            width: "100%",
            height: "calc(100vh)",
            objectFit: "cover",
            marginBottom: "-10px",
          }}
          alt=""
        />
        <div id="ItineraryDiv">{RenderItinerary()}</div>
      </div>
    );
  }
}
