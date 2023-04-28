import React, { Component } from "react";
import itineraryPic from "../Assets/images/ItineraryPic.jpg";
import paraglidePic from "../Assets/images/Paraglide.jpg";
import { Link, Element, scroller } from "react-scroll";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Itinerary.css";

const timeArray = ['3:30-4:30', '4:30-5:30', '6:00-7:00', '7:00-8:00', '8:00-8:30', '8:30-10:00', '9:30-11:00', '11:00'];
const eventArray = ['Ceremony', 'Photos with Bride and Groom', 'Terra Madre Welcome: Drinks and Oysters', 'Hors d’Oeuvres and Salad', 'Sunset dancing', 'Dinner: Risotto, Choice of Lamb, Veal, Chicken, and Schnitzel', 'Dancing', 'Dessert'];

function RenderItinerary(){
  var toReturn = null;
  for(var i = 0; i < timeArray.length; i++){
    toReturn += <div></div>
  }
  return(
    
  );
}
export class Itinerary extends Component {
  constructor(props) {
    super(props);
  }
  
 
  
  render() {
    return (
      <div className={"col-12"}>
         <img
              src={itineraryPic}
              style={{
                width: "100%",
                height: "calc(100vh)",
                objectFit: "cover"
              }}
            />
            <div id="ItineraryDiv">
              {RenderItinerary()}
            </div>
      </div>
    );
  }
}
