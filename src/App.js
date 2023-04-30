import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./custom.css";
import { Home } from "./components/Home";
import { Itinerary } from "./components/Itinerary.js";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Itinerary" element={<Itinerary/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
