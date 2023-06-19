import React from "react"; 
import "./style.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const FirstPage = () => {
  return (
    <div className="index">  
        <div className="overlap-group">
            <img
              className="group"
              alt="Group"
              src="/group-1.png"
            />
          </div>
          <Header/>

        <div> 
          <div className="div-wrapper">
            <Link to="/SecondPage" className="link-style"> Start now </Link>
          </div> <Outlet />
        </div>
        <div className="rectangle" >
              <Footer
                image1="/group-2.png"
                image2="/blood-pressure.png"
                image3="/thermometer.png"
                text1="Heart Rate"
                text2="Blood Pressure"
                text3="Skin Temperature"
                paragraph1="Measure your heart rate effortlessly and stay informed about your cardiovascular health."
                paragraph2="Monitor your blood pressure levels and take proactive steps towards maintaining a healthy circulatory system."
                paragraph3="Track your skin temperature trends to better understand your body's thermoregulation and overall well-being."
              />

            </div>

      
      
    </div>
  );
}
export default FirstPage;