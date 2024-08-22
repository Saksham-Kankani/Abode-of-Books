import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({ ...authUser, user: null })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            
            setTimeout(()=>
                {
                window.location.reload();
                },1000)
           
        } catch (error) {
            console.log(error);
            toast.error("Error: " + error.message)
            setTimeout(()=>{},1000);
        }
    }
    return (
        <div>
            <button onClick={handleLogout} className='px-3 py-2 text-white bg-red-500 rounded-md cursor-pointer'>Logout</button>
        </div>
    )
}

export default Logout
