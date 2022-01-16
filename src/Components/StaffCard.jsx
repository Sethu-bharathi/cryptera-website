import React from "react";
import "../Styles/ComponentsStyles/Staff_card.css"

function Staff_card(props) {
    return(
    <div className="faculty">
        <div className="triangle"></div>
        <img className="faculty-image"src={props.image} alt="" style={{objectFit:"contain"}}/>
        <h3>{props.Name}</h3>
        <h3>{props.position}</h3>
    </div>);
}
export default Staff_card;