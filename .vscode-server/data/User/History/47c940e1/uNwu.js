import React from "react";
const Card = (props) => {
    return(
        <div>
            <p className="value">{props.value}</p>
            <p className="mesure">{props.mesure}</p>
            <img className={props.image} alt="Ph heartbeat" src="/ph_heartbeat.png" />


        </div>
    )
}

export default Card;