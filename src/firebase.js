
import firebase  from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyC1vPHv2QJnyWJkf6LpaYCO8McNrNx30AU",
    authDomain: "mailbox-with-react.firebaseapp.com",
    projectId: "mailbox-with-react",
    storageBucket: "mailbox-with-react.appspot.com",
    messagingSenderId: "357633585439",
    appId: "1:357633585439:web:2162464ac5316d49e3802a"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  

const authen=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
  export {db,authen,provider};