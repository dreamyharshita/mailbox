import React from "react";
import './../../css/SidebarOptions.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarOptions=({icon,title,number,isactive})=>{
return <div className="sidebar_options">
    {console.log(isactive)}
    <div className={`option ${isactive && 'option--active'}`}>
    <FontAwesomeIcon className="icon" icon={icon}/>
<h4>{title}</h4>
<p>{number}</p>

    </div>

</div>
}

export default SidebarOptions;