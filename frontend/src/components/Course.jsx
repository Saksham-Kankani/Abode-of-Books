import React, { useEffect, useState } from 'react'
import Card from './Card';
import {Link} from "react-router-dom"
import axios from "axios";

function Course() 
{

  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook=async()=>{
    try {
     const res=await axios.get("http://localhost:4001/book")
     console.log(res.data);
     setBook(res.data);

    } catch (error) {
      console.log(error);

    }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' dark:bg-slate-900 dark:text-white mt-18 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl mt-12 pt-20'>Welcome to the Courses Page <span className='text-pink-500'>Friends!</span></h1>
          <p className='mt-12'>Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce maecenas rhoncus netus nibh blandit eleifend. Nulla sem lacinia metus dapibus nostra litora mollis tempor. Sapien dolor euismod vivamus rhoncus arcu, elementum curae mus.</p>
          <Link to="/">
          <button className='mt-6 px-4 py-2 bg-pink-500 text-white rounded-md hover:text-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              photo={item.image}
              heading={item.name}
              type={item.category}
              cost={item.price}
              desc={item.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course;