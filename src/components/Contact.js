import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
export const Contact = () => {
  const navigate=useNavigate()
  const backHome =()=>{
    console.log("--------")
    navigate("/")
  }
  return (
    <>
    <div>Contact</div>
    <Outlet/> 
    <button onClick={backHome}>Back to Home</button>
    </>
  )
}
