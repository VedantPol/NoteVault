import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import "./RegisterScreen.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

//   const postDetails = () => {
//     if (
//       pic ===
//       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//     ) {
//       return setPicMessage("Please Select an Image");
//     }
//     setPicMessage(null);
//     if (pic.type === "image/jpeg" || pic.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pic);
//       data.append("upload_preset", "notezipper");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };

  const postDetails=(pics)=>{
    if(!pics){
        return setPicMessage("Please select an Image")
    }
    setPicMessage(null);
    if(pics.type=== 'image/jpeg' || pics.type==='image/png'){
        const data = new FormData();
        data.append('file',pics)
        data.append('upload_preset','noteVault')
        data.append("cloud_name", "dt0bjp31c");
        fetch("https://api.cloudinary.com/v1_1/dt0bjp31c/image/upload",{
            method: "post",
            body: data,
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setPic(data.url.toString());
        })
        .catch((err)=>{
            console.log(err);
        })
        
    } else{
        return setPicMessage("Please Select an Image");
    }
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("passwords Do Not Match");
    } else {
      setMessage(null);
      try {
        const config ={
            headers:{
                "Content-type": "application/json",
            },
        };
        setLoading(true);
        const {data} = await axios.post(
            "/api/users",
            {name,pic,email,password},
            config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        
      } catch (error) {
        setError(error.response.data.message)
      }
    }
  };
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>
          <div>&nbsp;</div>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
