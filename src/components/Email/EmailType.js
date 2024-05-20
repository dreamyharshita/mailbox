import React from "react";
import { faInbox,faUsers,faTag } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmailType=()=>{
return <div className="emailtype">
    <div className=" emailtype_options emailtype_options--active">
    <FontAwesomeIcon className="fa_type" icon={faInbox}/>
    <p>Primary</p>
    </div>
    <div className="emailtype_options">
    <FontAwesomeIcon className="fa_type" icon={faUsers}/>
    <p>Social</p>
    </div>
    <div className="emailtype_options">
    <FontAwesomeIcon  className="fa_type" icon={faTag}/>
    <p>Promotions</p>
    </div>
</div>
}

export default EmailType;