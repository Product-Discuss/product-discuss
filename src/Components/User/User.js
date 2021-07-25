import React from 'react'
import { auth } from '../../firebase';
import { UserContext } from "../../App";
import { useState, useContext } from "react";

const User = () => {
  let currUser = useContext(UserContext);

  (function(){
    auth.onAuthStateChanged(function (user) {
      if (user) {
        if(user.emailVerified) currUser.setUser(user)
      }
    });
  }()) 

  return (
    <>
      {
        (!currUser.user.emailVerified) ? <h1>Verify Email Please !</h1>:
        <h1>Congrats ! You are logged in !</h1>
      } 
    </>
  )
}

export default User
