import React from "react";
import { Link, Outlet } from "react-router-dom";


const Header = () => {
  return (  
    <div className="margin-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ><h1 className="track-your-health" >
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
                  <input className="input " type="text" placeholder="Enter Mac Address:" />
              </div>
                <Link to="/SecondPage/tezataz" className="link-style div-wrapper"> Start now </Link>

      </div>

          
          
    </div> 
  );
}

export default Header;
