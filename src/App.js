import React, { useEffect, useState } from 'react';
import Header from './components/UI/Header';
import './App.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmailList from './components/Email/EmailList';
import Compose from './components/Compose/Compose';
import { Container,Row ,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice.js';
import Emaildetail from './components/RoutedPage/Emaildetail';
import { Routes,Route, useNavigate} from 'react-router-dom';
import Login from './components/Login/Login';
import { selecteduser, signin ,signout} from './features/userSlice';
import { authen } from './firebase';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openSendMessage } from "./features/mailSlice";
import SentMail from './components/RoutedPage/SentMail';


function App() {
  const isMessageOpen=useSelector(selectSendMessageIsOpen);
 
  const user=useSelector(selecteduser);
 const dispatch=useDispatch();
 const navigate=useNavigate();

 const [textValue,setText]=useState(false);

  useEffect(()=>{
authen.onAuthStateChanged((user)=>{
if(user){
dispatch(signin({
  displayName:user.displayName,
  photoUrl:user.photoURL,
  email:user.email
}))
}
else{
  dispatch(signout())
}
})
  },[]);

  
  const plus=<FontAwesomeIcon icon={faPlus}/>
  const b=document.querySelector("#btn");

console.log(b);

  const btnText=()=>{
    if(textValue){
      b.innerHTML="INBOX";
      navigate('/sent');
       }
       else{
        b.innerHTML="SENT MAIL";
        navigate('/');
       }
  }
const maildisplay=(e)=>{
  e.preventDefault();
  navigate('/sent');
  setText(!textValue);
 btnText();
 
}
  
  return (
    <>
    
      {user && <Container fluid>
  <Row>
    <Col>
    <div className="App">
    
      <Header/>
      <div className='app_body'>
        <div className='buttons'>
      <button className="btn_compose" onClick={(e)=>{
    e.preventDefault();
dispatch(openSendMessage());
}}>{plus}  COMPOSE MAIL</button>
<button className="btn_compose" id="btn" onClick={maildisplay}>SENT MAIL</button>
</div>
      <Routes>
        <Route exact path="/" element={<EmailList type="recieved"/>}>
       
        </Route>
        <Route path="/mail" element={<Emaildetail/>}>
        
        </Route>
        <Route exact path="/sent" element={<SentMail/>}>
        
        </Route>
      </Routes>
      
      
      </div>
    {isMessageOpen && <Compose/>}  
    </div>
    </Col>
    </Row>
    </Container>}

    {!user && <Login/>}

    </>
  );
}

export default App;
