import React from "react";
import { Link, Outlet } from "react-router-dom";


const Header = () => {
  return (  
    <><h1 className="track-your-health">
          Track your Health <br />
          using our app
      </h1>
      <div className="overlap-2">
              <p className="text-wrapper-5">
              Revolutionize your health monitoring with our app. 
              Analyze and graph real-time data of heart rate, blood pressure, 
              and skin temperature, while tracking average values over time. 
              Take control of your well-being today.
              </p>
              <div className="text-wrapper-6 rectangle-2">
                  <input className="input text-wrapper-6" type="text" placeholder="Enter Mac Address:" />
              </div>
                <Link to="/SecondPage" className="link-style div-wrapper"> Start now </Link>

          </div>

          
          
          </> 
  );
}

export default Header;
