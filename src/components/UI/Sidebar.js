import React from "react";
import './../../css/Sidebar.css';
import {faInbox,faStar ,faClock,faTrash,faAsterisk,faFile,faPaperPlane,faEnvelopeOpen,faReorder,faSortDown,faVideoCamera,faKeyboard} 
from "@fortawesome/free-solid-svg-icons";
import SidebarOptions from "./SidebarOptions";


const data_sidebar=[
    {
        "icon": faInbox,
        "title":"Inbox",
        "number":234,
        "isactive":true
    },
    {
        "icon": faStar,
        "title":"Starred",
        "number":234,
        "isactive":false
    },
    {
        "icon": faClock,
        "title":"Snoozed",
        "number":234,
        "isactive":false
    },
    {
        "icon": faAsterisk,
        "title":"Important",
        "number":234,
        "isactive":false
    },
    {
        "icon": faPaperPlane,
        "title":"Sent",
        "number":234,
        "isactive":false
    },
    {
        "icon": faEnvelopeOpen,
        "title":"Drafts",
        "number":234,
        "isactive":false
    },
    {
        "icon": faReorder,
        "title":"Category",
        "number":234,
        "isactive":false
    },
    {
        "icon": faTrash,
        "title":"Trash",
        "number":234,
        "isactive":false
    },
    {
        "icon": faFile,
        "title":"Documents",
        "number":234,
        "isactive":false
    },
    {
        "icon": faSortDown,
        "title":"More",
        "number":234,
        "isactive":false
    }

];

const Sidebar=()=>{
   
    return <div className="sidebar"> 




<br/>
{
    data_sidebar.map((value)=>{
        return  <SidebarOptions icon={value.icon} title={value.title} number={value.number} isactive={value.isactive}/>
        
    })
}
   <hr />
<h3 className="sidebar_heading">Meet</h3>
<SidebarOptions icon={faVideoCamera} title="New Meeting"  />
<SidebarOptions icon={faKeyboard} title="Join a Meeting"  />
        
    </div>
}

export default Sidebar;