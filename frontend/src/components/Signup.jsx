import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Signup() 
{
    const navigate=useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
       await axios.post("http://localhost:4001/user/signup",userInfo)

        .then((res)=>{
            console.log(res.data);
            if(res.data)
            {
                toast.success('Signup Successful');
                navigate("/");
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        })
        .catch((err)=>{
            if(err.response)
            {
                console.log(err);
                toast.error("Error:" + err.response.data.message);
            }
          
        })
    }

    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className=" p-8 w-[500px]">
                    <div className="modal-box dark:bg-slate-900 dark:text-white">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='mt-6 space-y-3'>
                                <p>Name</p>
                                <input type='text' className='outline-none px-10 py-1 border' placeholder='Enter your name' {...register("fullname", { required: true })}></input>
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                                <p>Email</p>
                                <input type='email' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your email' {...register("email", { required: true })}></input>
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                <p>Password</p>
                                <input type='password' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your password' {...register("password", { required: true })}></input>
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                <br />
                                <div>
                                    <button className='bg-pink-500 rounded-md px-2 py-1 mt-3 mb-3'>Signup</button>
                                    <p>Already have a account?
                                        <span>
                                            <button onClick={() => document.getElementById("my_modal_3").showModal()} className='underline cursor-pointer'>Login</button>
                                            <Login />
                                        </span>

                                    </p>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup