import React, { useState } from "react";
import './../../css/Compose.css';
import { faMinus,faClose,faExternalLink,faPaperPlane
,faFont,faChain,faPaperclip,faCloud,faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { faSmile ,faFileImage} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { selecteduser } from "../../features/userSlice";

import { useSelector } from "react-redux";



const Compose=()=>{

  const [to,setTo]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');

  const dispatch=useDispatch();
const user=useSelector(selecteduser);

const formSubmit=(e)=>{
e.preventDefault();
if(to==="")
{
  return alert("to is required");
}
if(subject==="")
{
  return alert("subject is required");
}
if(message==="")
{
  return alert("message is required");
}
db.collection("emails").add({
  to,
  subject,
  message,
  from:user.email,
  fromName:user.displayName,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})
setTo('');
setSubject('');
setMessage('');
dispatch(closeSendMessage());
alert("email send succesfully");

}


    return (
        <div className="compose">
            <div className="compose_header">
              <div className="compose_header_left">
               <span>New Message</span>
              </div>
              <div className="compose_header_right">
               <FontAwesomeIcon className="fa_compose" icon={faMinus}/>
               <FontAwesomeIcon className="fa_compose" icon={faExternalLink}/>
               <FontAwesomeIcon className="fa_compose" icon={faClose} onClick={
                ()=>{
                  dispatch(closeSendMessage());
                }
               }/>
              </div>
            </div>
            <form onSubmit={formSubmit}>
            <div className="compose_body">
              <div className="compose_bodyform">
               <input type="email" value={to} onChange={(e)=>{
                setTo(e.target.value);
               }}
               placeholder="Receipents"/>
               <input type="text" value={subject} onChange={(e)=>{
                setSubject(e.target.value);
               }}
               placeholder="Subject"/>
               <textarea rows="20" cols="30" onChange={(e)=>{
                setMessage(e.target.value);
               }} >{message}</textarea>
              </div>
            </div>
            <div className="compose_footer">
            <div className="compose_footerLeft">
                <button type="submit">Send{" "}
                <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
</div>
<div className="compose_footerRight">
<FontAwesomeIcon className="fa_mail" icon={faFont}/>
<FontAwesomeIcon className="fa_mail" icon={faPaperclip}/>
<FontAwesomeIcon className="fa_mail"  icon={faChain}/>
<FontAwesomeIcon className="fa_mail"  icon={faSmile}/>
<FontAwesomeIcon className="fa_mail"  icon={faCloud}/>
<FontAwesomeIcon className="fa_mail"  icon={faFileImage}/>
<FontAwesomeIcon className="fa_mail"  icon={faEllipsisV}/>
</div>
            </div>
            </form>
        </div>
        
    )
}

export default Compose;