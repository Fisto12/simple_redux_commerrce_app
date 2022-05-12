import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {  
  // const cartItems=useSelector((state)=>state.cart.itemsList)
  // console.log(cartItems);
  const cart=useSelector((state)=>state.cart)
  useEffect(()=>{
      const request=async()=>{
        const res=await fetch('https://resturant-18040-default-rtdb.firebaseio.com/cartItems.json',{
          method:"PUT",
          body:JSON.stringify(cart)
     })
     const data = await res.json()
      } 
      request()
  },[cart])

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  return (
    <div className="App">
      {isLoggedIn? <Layout />: <Auth />}
    </div>
  );
}

export default App;
