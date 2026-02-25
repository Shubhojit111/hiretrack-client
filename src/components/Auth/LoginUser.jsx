import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../../utils/config";


const LoginUser = () => {
    const serverURL = config.serverURL;
    const navigate=useNavigate()

    const [formdata, setFormdata] = useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormdata({
            ...formdata,
            [name]:value 
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(formdata)

        try{
            const response=await axios.post(`${serverURL}/api/auth/login`,
            formdata,
            {withCredentials:true}
        )
        console.log(response.data.message)
        navigate('/dashboard')
        }
        catch(err){
            console.log(err?.response?.data?.message || err.message)
        }
    }

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-2">
                    Welcome Back
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                    Sign in to continue tracking your progress.
                </p>

                {/* {error && (
          <div className="bg-red-500/10 text-red-400 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )} */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full bg-[#0f172a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        // disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg text-white font-semibold"
                    >
                        {/* {loading ? "Signing in..." : "Login"} */}
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-6 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginUser;
