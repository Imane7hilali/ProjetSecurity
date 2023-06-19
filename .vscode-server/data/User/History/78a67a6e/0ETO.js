import React , {useState , useEffect} from "react";
import "./style2.css";
import Card from "./Card";
import { useParams } from "react-router-dom";


import axios from 'axios';

const SecondPage = () => {

  const [averageData, setAverageData] = useState({
    averageBloodPressure: null,
    averageBodyTemperature: null,
    averageHeartBeat: null,
  });

  const { macAddress } = useParams();

  useEffect(() => {
    axios.get(`http://20.216.154.100:8000/vitalsigns/average/${macAddress}`)
      .then(response => {
        setAverageData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        // Handle the error appropriately in your application
      });
  }, []);  

  let averageHeartBeat =  averageData.averageHeartBeat ? averageData.averageHeartBeat.toFixed(2) : null
  let averageBodyTemperature =  averageData.averageBodyTemperature ? averageData.averageBodyTemperature.toFixed(2) : null
  let averageBloodPressure =  averageData.averageBloodPressure ? averageData.averageBloodPressure.toFixed(2) : null


  

  console.log(averageData)


  return (
    <div className="secondpage">
      <div className="div ">
        <div className="overlap flexit">
          <div className="health-tracker">
            <span className="span">Health</span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="text-wrapper-3">Tracker</span>
          </div>

          <div className="overlap-group">
            <div className="text-wrapper-4 rectangle">
                <select className="time-period-list " >
                <option value="last5minutes">Last 5 Minutes</option>
                <option value="lasthour">Last Hour</option>
                <option value="lastweek">Last Week</option>
                <option value="lastmonth">Last Month</option>
                </select>
            </div>
          </div>

          <div className="profile flexit">
            <div className="ellipse " />
              <div >
                <div className="name">Salah Rddine </div>
                <div className="lastname">Rossi</div>
              </div>
          </div>



        </div>
        <div className="flexit-gap">
          <Card bgColor={"#999cee"} image={"/ph_heartbeat.png"} value={averageHeartBeat} mesure={"Heart beat"} />
          <Card bgColor={"#9cef95"} image={"/blood-pressure2.png"} value={averageBloodPressure} mesure={"Blood Pressure"} />
          <Card bgColor={"#f77676"} image={"/thermometer2.png"} value={averageBodyTemperature} mesure={"Body Temperature"} />


        </div>
        
 
      </div>
    </div>
  );
};
export default SecondPage;