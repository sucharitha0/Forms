
// import './App.css';
import React,{useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
console.log({email,password})
  const handleEmail = (e)=>{
setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
setPassword(e.target.value)
  }
  const handleApi=()=>{
    console.log({email,password})
    axios.post('https://demo.syngymaxim.com/elemantraapi/api/Auth/Login',{
      email:email,
      password:password
    })
    .then(result=>{
      console.log(result.data)
      alert('success')
      localStorage.setItem('token',result.data.token)
    })
    .catch(error=>{
      alert('Service error')
      console.log(error)
    })
  }
  return(

    <div className="card1">

    <h1 style={{margin: '0 300px 0px 0px'}}>Login</h1>

      <Link to = "/Register" style={{margin: '0px -164px 0px 46px'}}> Click here to Register < /Link><br/>
  <br/>  Email:  <input style={{margin: '0 0px 0px 46px'}} value={email} onChange={handleEmail}type="text"/><br/>
    <br/>Password: <input value={password} onChange={handlePassword} type="text"/><br/>
  <br/>  <button className="btn" onClick={handleApi}style={{margin: '0 0px 0px 156px'} }>
    <Link to="/users">Login</Link></button>
      <Link to = "/Password" style={{margin: '0 0px 0px 46px'}}> Forgotpassword < /Link>
      </div>
  );




}


export default Login;
