import React from "react";
import "./style.css";

export default function Vetrina() {
  return (
    <div className="container" id="vetro">
      <div className="row">
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/aqua.jpg")}
            alt="logo"
          />
        </div>
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/blue.jpg")}
            alt="logo"
          />
        </div>
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/dots.jpg")}
            alt="logo"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/gold.jpg")}
            alt="logo"
          />
        </div>
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/green.jpg")}
            alt="logo"
          />
        </div>
        <div className="col-sm">
          <img
            className="img-fluid forsale"
            src={require("../../public/purple.jpg")}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
