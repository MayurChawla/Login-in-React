import React, { useState, useEffect } from 'react';
import './App.css';
import firebasee from './firebaseconfig';
import HomePage from './HomePage';
import Login from './Login';

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const userLoginHandler = () => {
    clearErrors();
    firebasee
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const userSignupHandler = () => {
    clearErrors('');
    firebasee
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/week-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const userLogoutHandler = () => {
    firebasee.auth().signOut();
  };

  const authListener = () => {
    firebasee.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        clearInputs();
        setUser(user);
      }
      else
      {
        setUser("");
      }
    });
  };

  useEffect(()=>{
    authListener();
  },[]);

  return (
    <div className="App">
      {user ? (
            <HomePage userLogout={userLogoutHandler}/>
          ):(
            <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              userLogin={userLoginHandler}
              userSignup={userSignupHandler}
              hasAccount={hasAccount}
              sethasAccount={sethasAccount}
              emailError={emailError}
              passwordError = {passwordError}
            />
          )
      }
    </div>
  );
}

export default App;
