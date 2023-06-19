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
              <div className="rectangle-2" />
              <div className="text-wrapper-6">
                  <input className="input" type="text" placeholder="Enter Mac Address:" />
              </div>
          </div>
          <div className="div-wrapper">
            <Link to="/SecondPage" className="link-style"> Start now </Link>
          </div> <Outlet />

          
          
          </> 
  );
}

export default Header;
