import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faQuestionCircle,} from "@fortawesome/free-regular-svg-icons";
import { faBars,faSearch,faCaretDown,faCog,faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import './../../css/Header.css';
import { Image } from "react-bootstrap";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useSelector } from "react-redux";
import { selecteduser } from "../../features/userSlice";



const Header=()=>{
   
    const user=useSelector(selecteduser);

    return  <>
    
    <div className="header">
        <div className="header_left">

<div style={{display:"flex"}}>
<FontAwesomeIcon className="fa" icon={faBars} />
<div style={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>
<FontAwesomeIcon className="fa_en" icon={faEnvelope} />
<h4 >MAILER</h4>
</div>

</div>
</div>
<div className="header_middle">
    <div className="search_bar">
<FontAwesomeIcon className="fa_search" icon={faSearch} />
<input  type="text" placeholder="search mail"></input>
<FontAwesomeIcon className="fa_down" icon={faCaretDown} />
</div>
</div>
<div className="header_right">
    <FontAwesomeIcon className="hov" icon={faQuestionCircle}/>
    <FontAwesomeIcon className="hov" icon={faCog}/>
    <FontAwesomeIcon className="hov" icon={faEllipsisV}/>
    <Image onClick={(e)=>{
        e.preventDefault();
        firebase.auth().signOut()
    }} alt="?" src={user.photoUrl}
    style={{width:'2rem' ,height: '2rem'}} roundedCircle/>


</div>
        

    </div>
    </>
    
}

export default Header;