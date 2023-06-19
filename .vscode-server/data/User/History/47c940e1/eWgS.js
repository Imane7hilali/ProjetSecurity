import React from "react";
const Card = (props) => {
    return(
        <div>
            <p className="value">{props.value}</p>
            <p className="mesure">{props.mesure}</p>
            <img className="img"  src={props.image} />
        </div>
    )
}

export default Card;