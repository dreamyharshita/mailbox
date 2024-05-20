import React from "react";
import './../../css/EmailList.css';
import { faAngleLeft,faAngleRight,faSortDesc,faRefresh,faEllipsisV,faTag,faPrint,faExpand,faArrowLeft, faUser, faStar, faShare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

import { selectedMail } from "../../features/mailSlice";


const Emaildetail=()=>{


  const mail=useSelector(selectedMail);
  
    const navigate=useNavigate();
   
    return (
        <div >
        <div className="emailList_setting">
            <div className="emailList_left">
            <FontAwesomeIcon className="fa" icon={faArrowLeft} onClick={()=>{
                navigate('/');
            }}/>
         <FontAwesomeIcon className="fa" icon={faSortDesc}/>
         <FontAwesomeIcon  className="fa" icon={faRefresh}/>
         <FontAwesomeIcon   className="fa" icon={faEllipsisV}/>
         </div>
         <div className="emailList_settingRight">
           <p>1-50 of 10,200</p>
           <FontAwesomeIcon  className="fa" icon={faAngleLeft}/>
           <FontAwesomeIcon   className="fa" icon={faAngleRight}/>

         </div>
        </div>
        <div className="email_details">
         <div className="topBar">
         <div className="topBar_left">
            <p>{mail.subject}</p>
            <FontAwesomeIcon className="fa_bar" icon={faTag}/>
         </div>
         <div className="topBar_right">
         <FontAwesomeIcon className="fa_bar" icon={faPrint}/>
         <FontAwesomeIcon className="fa_bar" icon={faExpand}/>

         </div>
         </div>
         <div className="midBar">
          <div className="midBar_left">
           <FontAwesomeIcon  className="fa_bar" icon={faUser}/>
           <h4>Name</h4>
           <p>{mail.name}</p>
          </div>
          <div className="midBar_right">
             <p>{mail.time}</p>
             <FontAwesomeIcon className="fa_bar" icon={faStar}/>
             <FontAwesomeIcon className="fa_bar" icon={faShare}/>
             <FontAwesomeIcon className="fa_bar" icon={faEllipsisV}/>
          </div>
         </div>
         <div className="message_body"> 
           <p>{mail.message}</p>
         </div>
        </div>
        </div>
    )
}

export default Emaildetail;