import React from "react";

//primero se crea el evento en componente evento yluego se aplica en la


const Event = (props) => {
 
    
    return (

        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </td>

    )
    
}


export default Event;
