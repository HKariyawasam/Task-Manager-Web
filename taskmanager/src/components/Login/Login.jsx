import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Login.css";
import { loginUser, registerUser } from "../../services/UserService";
import toastNotification from "../Widgets/toastNotification";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../utils/userSessions";



export function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  let navigate = useNavigate();

  const userLogin = () => {
    console.log("user", userName);
    console.log("password", password);

    const userObject = {
      username:userName,
      password
    }

    if(userName == null|| password == null){
      toastNotification("Please fill the fields", "info") 
    }else{
      loginUser(userObject).then((response)=>{
        if(response.ok){
          console.log(response.data)
          setUserSession(response.data.username)
          navigate("/tasks")
        }else{
          toastNotification("UnAuthorized User!", "error") 
        }
        
  
      }).catch((error)=>{
        toastNotification("Error Occured!","error")
      })
    }

    

  };

  const userRegister = ()=>{
    console.log("user", userName);
    console.log("password", password);

    const userObject = {
      username:userName,
      password
    }

    if(userName == null|| password == null){
      toastNotification("Please fill the fields", "info") 
    }else{
      registerUser(userObject).then((response)=>{
        if(response.ok){
          console.log(response.data)
        }else{
          toastNotification("UnAuthorized User!", "error") 
        }
  
      }).catch((error)=>{
        toastNotification("Error Occured!","error")
      })
    }

   
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The Best Manager <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                to manage your tasks
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Elevate your productivity and regain control of your daily life
              with our intuitive task manager, designed to help you efficiently
              organize, prioritize, and track your tasks, so you can achieve
              your goals effortlessly
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

          <ToastContainer />

            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6"></MDBCol>

                  <MDBCol col="6"></MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="UserName"
                  id="form3"
                  type="email"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="d-flex justify-content-center mb-4"></div>

                <button
                  className="w-100 mb-4 btn btn-primary"
                  type="button" 
                  onClick={() => {
                    userLogin();
                  }}
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <button className="w-50 mb-4 btn btn-info"
                  type="button"
                  onClick={() => {
                    userRegister();
                  }} >
                    sign up
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
