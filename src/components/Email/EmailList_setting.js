import React from "react";
import "./../../css/EmailList.css";
import { faSortDesc,faRefresh,faEllipsisV,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailList_setting=()=>{
return <div className="emailList_setting">
        <div className="emailList_left">
         <input className="fa" type="checkbox"/>
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
}

export default EmailList_setting;