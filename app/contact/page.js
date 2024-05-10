"use client";
import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

// export const metadata = {
  //     title: "Contact - Abhrajit Gupta Blogs",
  //     description: "Generated by create next app",
  // };
  
const Contact = () => {

  const [form, setForm] = useState({name: '',email: '',message: ''});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
    
      const response = await fetch('/api/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }); 

  };
 
  

  return (
    <>
    <Toaster/>
    <form onSubmit={handleSubmit} className='mt-12 flex flex-col justify-center items-center gap-4 p-3'>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="name">Enter your name</label>
          <input onChange={handleChange} value={form.name} className='field bg-transparent border border-white px-2 w-[30%] h-10 rounded-lg' type="text" name="name" id="name" required />
        </div>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="email">Enter your email</label>
          <input onChange={handleChange} value={form.email} className='field bg-transparent border border-white  px-2 w-[40%] h-10 rounded-lg' type="email" name="email" id="email" required />
        </div>
        <div className="container m-auto flex flex-col justify-center items-center gap-2">
          <label htmlFor="message">Enter your message</label>
          <textarea onChange={handleChange} value={form.message} className='field bg-transparent border border-white  w-[60%] h-[200px] p-4 rounded-lg' name="message" id="message" required></textarea>
        </div>
        <button onClick={()=>{toast.success('Successfully submitted!')}} className='bg-gray-900 cursor-pointer px-4 py-2 rounded-lg transition-all hover:bg-gray-800' type="submit">Submit</button>
    </form>
    </>
  
  )
}

export default Contact
