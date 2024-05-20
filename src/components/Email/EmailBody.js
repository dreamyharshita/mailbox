import React from "react";
import './../../css/EmailList.css';
import { faStar ,faSquare,faCaretSquareRight} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "../../features/mailSlice";

const EmailBody=({name,subject,message,time})=>{

const navigate=useNavigate();
const dispatch=useDispatch();

  const openMsg=()=>{
   dispatch(openMessage({
    name,
    subject,
    message,
    time
   }))
   navigate("/mail");
  }

    return <div className="emailbody" onClick={openMsg}>
        <div className="emailbody_left">
         <FontAwesomeIcon className="fa" icon={faSquare}/>
         <FontAwesomeIcon className="fa" icon={faStar}/>
<FontAwesomeIcon className="fa" icon={faCaretSquareRight}/>
<h4>{name}</h4>
        </div>
        <div className="emailbody_middle">
        <div className="emailbody_mid_msg">
          <p><b>{subject+"-"} </b>{"   "} {message}</p>
        </div>
        </div>
        <div className="emailbody_right">
        <p>{time}</p>
        </div>


    </div>
}

export default EmailBody;