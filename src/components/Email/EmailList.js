import React, { useEffect,useState } from "react";
import './../../css/EmailList.css';
import EmailList_setting from "./../Email/EmailList_setting";
import EmailType from "./../Email/EmailType";
import EmailBody from "./EmailBody";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selecteduser } from "../../features/userSlice";


const EmailList=(props)=>{
   const [emails,setEmails]=useState([]); 
  
   const user=useSelector(selecteduser); 

   useEffect(()=>{
       db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setEmails(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
       })
   },[]);

   console.log(emails);
  
   
return (
    <div className="email_list">
       
<EmailList_setting/>
<EmailType />

{emails.map(({id,data})=>{
  return <>
  
  {console.log(props.type)}
{ props.type==="recieved" && data.to===user.email && <EmailBody key={id} name= {data.fromName}
subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000)
.toLocaleTimeString()}/> }
{
    props.type==="sent" && data.to!==user.email && <EmailBody key={id} name= {data.to}
    subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000)
    .toLocaleTimeString()}/> 
}
   </>

})}


    </div>
)
}

export default EmailList;