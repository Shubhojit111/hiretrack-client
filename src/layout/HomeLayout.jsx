import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Briefcase, FileText, LogOut, LetterText, FileJson, User2, LogOutIcon, LucideLogOut } from "lucide-react";
import Profile from "../pages/Profile";
import axios from "axios";
import config from "../utils/config"
import { useEffect, useState } from "react";

const HomeLayout = () => {
  const serverURL = config.serverURL;
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  useEffect(() => {
    const checkAuth = async() =>
      {
        try{
          const response = await axios.get(`${serverURL}/api/auth/check`,{withCredentials:true})
          // console.log(response.data)
          setUser(response.data.user)
        }
        catch(err){
          console.log(err.response?.data?.message || err.message)
        }
      }
      checkAuth()
  } , [])

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${serverURL}/api/auth/logout`);
      // console.log(res);
      navigate("/login");
    }
    catch (err) {
      console.log(err.response?.data?.message || err.message)
    }
  }

  return (
    <div className="flex h-screen bg-[#f5f6f8]">

      {/* Sidebar */}
      <div className="w-64 bg-[#0b1b35] text-white flex flex-col">

        {/* Logo */}
        <div className="px-6 py-5 text-lg font-semibold border-b border-white/10">
          <NavLink to="/">
            HireTrack
          </NavLink>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 space-y-2 text-sm">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive
                ? "bg-blue-600"
                : "hover:bg-white/10"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/job-tracker"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive
                ? "bg-blue-600"
                : "hover:bg-white/10"
              }`
            }
          >
            <Briefcase size={18} />
            Job Tracker
          </NavLink>

          <NavLink
            to="/resume-analyzer"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive
                ? "bg-blue-600"
                : "hover:bg-white/10"
              }`
            }
          >
            <FileText size={18} />
            Resume Analyzer
          </NavLink>

          <NavLink
            to="/cover-letter"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive
                ? "bg-blue-600"
                : "hover:bg-white/10"
              }`
            }
          >
            <LetterText size={18} />
            Cover Letter
          </NavLink>

          <NavLink
            to="/jd-analyzer"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive
                ? "bg-blue-600"
                : "hover:bg-white/10"
              }`
            }
          >
            <FileJson size={18} />
            JD Analyzer
          </NavLink>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 p-4 space-y-2 text-sm">

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${isActive ? "bg-blue-600" : "hover:bg-white/10"
              }`
            }
          >
            <User2 size={18} />
            Profile
          </NavLink>

          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition">
            <LogOut size={18} />
            Sign Out
          </button>

        </div>

      </div>

      {/* Main Content */}
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col">

        {/* 🔵 Global Top Bar */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-8">

          {/* Left */}
          <h1 className="text-lg font-semibold text-gray-800">
            Welcome, {user.name}
          </h1>

          {/* Right */}
          <div className="flex items-center gap-4">

            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-sm cursor-pointer hover:bg-gray-200 transition">
              🔔
            </div>

            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer">
              <button onClick={handleLogout}>
                <LogOutIcon size={18} />
              </button>
            </div>

          </div>

        </div>

        {/* 🔵 Page Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#f5f6f8]">
          <Outlet />
        </div>

      </div>


    </div>
  );
};

export default HomeLayout;
