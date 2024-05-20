import React from "react";
import { Button, Image } from "react-bootstrap";
import mail from './../../assets/mail.png';
import './../../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authen,provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { signin } from "../../features/userSlice";


const Login=()=>{
    
const dispatch=useDispatch();

    const login=(e)=>{
        e.preventDefault();
   
        authen.signInWithPopup(provider).then((data)=>{
            console.log(data);
dispatch(signin({
   
    displayName:data.user.displayName,
    photoUrl:data.user.photoURL,
    email:data.user.email
}));
        }).catch(err=>{

            alert(err);
        })
        
}
return <div className="loginwrapper">
    <div className="login_box">
    <div className="logo">
        
        <Image  alt="mail" src={mail} roundedCircle/>
         </div>
        <Button onClick={login} variant="outline-dark">Login with Mail</Button>
   
</div>
</div>
}

export default Login;