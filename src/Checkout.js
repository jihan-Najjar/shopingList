import React, { useState } from "react";

const Checkout = ({setConfirme}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
   const  handleSubmit=(e)=>{
    e.preventDefault();
    setConfirme(prev=>!prev)
    console.log(`submitted name: ${name} , email: ${email} `);
    e.target.reset();

    }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="name" >
        Name:
        <input id="name" type="text" value={name}  onChange={(e)=>setName(e.target.value)} required/>

    </label>
    Email:
    <label htmlFor="email"  >
        <input id="email"  type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </label>
    <button type="submit">Submit </button>
  </form>;
};

export default Checkout;
