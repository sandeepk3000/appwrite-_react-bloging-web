import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../index"
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { login, logout } from "../../reduxStore/userSlice";
import MainLogo from "../Logo/MainLogo";
function Header() {
  const authStatus = useSelector((state) => state.user.status)
  const [openNav, setOpenNav] = useState(false)
  useEffect(()=>{
    window.addEventListener("resize",()=>window.innerWidth >= 640 && setOpenNav(false))
  })
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      url: "/signup",
      active: !authStatus
    },
    {
      name: "Articles",
      url: "/articles/all",
      active: authStatus
    },
    {
      name: "Compose",
      url: "/compose",
      active: !authStatus
    },
  ]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await authService.logout()
      dispatch(logout())
      setOpenNav(false)
      navigate("/login")
    } catch (error) {

    }
  }
  const translateStyle = {
    transform: openNav ? `translateX(0%)`:`translateX(-100%)`,
  }
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="w-full flex items-center sm:justify-between">
          <MainLogo name="R.K Blogs"/>
          <div className={`row items-start z-50 flex fixed  sm:translate-x-0 transition sm:relative top-0 left-0 h-full shadow-xl bg-white sm:shadow-none w-40 center sm:justify-center`} style={translateStyle}>

            <ul className="sm:inline-flex items-center flex w-full py-6  flex-col sm:flex-row justify-center center sm:space-x-8 gap-4">
              {navItems.map((item) => (
                item.active && (
                  <li className="text-center" key={item.name}>
                    <Link
                    onClick={()=>setOpenNav(false)}
                      to={item.url}
                      className="text-sm  font-semibold text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              ))}
              {
                !authStatus && <Button
                type="button"
                onClick={handleLogout}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Logout
              </Button>
              }
            </ul>
          </div>
        </div>
        <div className="sm:hidden text-center">
          {
            openNav && (
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={()=> setOpenNav(!openNav)}
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 cursor-pointer">
                <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke="black"
                  stroke-width="2" />
                <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke="black"
                  stroke-width="2" />
              </svg>
            )
          }
          {
            !openNav && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onClick={()=> setOpenNav(!openNav)}
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
