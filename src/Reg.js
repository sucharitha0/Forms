
// import './App.css';
import React,{useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Reg(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
    const [firstname,setFName] = useState('')
      const [lastname,setLName] = useState('')
console.log({email,password,firstname,lastname})
  const handleEmail = (e)=>{
setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
setPassword(e.target.value)
  }
  const handleFName = (e)=>{
setFName(e.target.value)
  }
  const handleLName = (e)=>{
setLName(e.target.value)
  }
  const handleApi=()=>{
    console.log({email,password,firstname,lastname})
    axios.post('https://reqres.in/api/register',{
      email:email,
      password:password,
      firstname:firstname,
      lastname:lastname
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
    <div className="card">
    <h1>Rgister</h1>
    Firstname:  <input value={firstname} onChange={handleFName}type="text" required/><br/>
    Lastname:  <input  value={lastname} onChange={handleLName}type="text" required/><br/>
    Email:     <input style={{margin: '0 0px 0px 46px'}} value={email} onChange={handleEmail}type="text"/><br/>
    Password:  <input value={password} onChange={handlePassword} type="text"/><br/>
      <br/>  <button onClick={handleApi}>
        <Link to="/Shop">
  Register</Link></button>
      </div>
  );




}


export default Reg;
