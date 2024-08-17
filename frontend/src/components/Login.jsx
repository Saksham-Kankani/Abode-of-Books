import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <dialog id="my_modal_3" className="modal  p-8">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-6 space-y-4'>
                            <p>Email</p>
                            <input type='email' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your email' {...register("email", { required: true })} />
                            <br/>
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            <p>Password</p>
                            <input type='password' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your password' {...register("password", { required: true })} />
                            <br/>
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            <br />
                            <button className='bg-pink-500 rounded-md px-2 py-1 mt-12'>Login</button>
                            <p>Don't have a account? <Link to="/signup" className='underline cursor-pointer'>Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login