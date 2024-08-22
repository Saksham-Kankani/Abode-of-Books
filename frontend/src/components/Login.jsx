import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)

            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Login Successful')
                    document.getElementById("my_modal_3").close()
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem("Users", JSON.stringify(res.data.user))
                    }, 1000)

                }
                
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);
                    setTimeout(()=>{},1000);
                }

            })
    }


    return (
        <div className="">
            <dialog id="my_modal_3" className="modal  p-8">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <div className=''>


                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-6 space-y-4'>
                                <p>Email</p>
                                <input type='email' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your email' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                <p>Password</p>
                                <input type='password' className='outline-none bg-base-100 rounded-md px-10 py-1 border' placeholder='Enter your password' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                                <br />
                                <button className='bg-pink-500 rounded-md px-2 py-1 mt-12'>Login</button>
                                <p>Don't have a account? <Link to="/signup" className='underline cursor-pointer'>Signup</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login