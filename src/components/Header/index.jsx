import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
      <div>
    

<nav className="navbar navbar-expand-lg  transparent">

{/* <!--  Only on mobile to medium screens  --> */}
  <Link className="navbar-brand d-lg-none" href="/"><img
            src={require("../../public/logo.png")}
            alt="logo"
            id="logoimage"
          /></Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

{/* <!--  Use flexbox utility classNamees to change how the child elements are justified  --> */}
  <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
    
    
{/* <!--   Show this only lg screens and up   --> */}
    <Link className="navbar-brand d-none d-lg-block" href="/"><img
            src={require("../../public/logo.png")}
            alt="logo"
            id="logoimage"
          /></Link>
    
    
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>

</div>
  );
}
