import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
// import { useAuth0 } from "@auth0/auth0-react"
import ProfileMenu from "./ProfileMenu";
import UserDetailsContext from "../context/UserDetailsContext";
const Header = () => {
  const [active, setActive] = useState(false);
  const navigate= useNavigate()
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = (prev) => {
    setMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      setActive(window.scrollY > 30);
    };
    window.addEventListener('scroll',handleScroll);
    return () => {
    window.removeEventListener('scroll',handleScroll);
    }
    },[menuOpened]);
    
  const {userDetails} = useContext(UserDetailsContext)

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("access_token_expiry");
    navigate("/login"); 
};
    // const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0()
    // console.log(userDetails)
  return (
    <header className={`${active ? "py-1 bg-white shadow-md" : "py-2"} max-padd-container fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}>
      <div className="flexBetween">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-16" />
          </Link>
        </div>
        <div className="flexCenter gap-x-4">
          {/* DESKTOP */}
          <Navbar
            containerStyles={
              "hidden xl:flex gap-x-5 xl:gap-x-12 capitalize medium-15"
            }
          />
          {/* MOBILE */}
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white shadow-md rounded-2xl w-64 medium-15 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white shadow-md rounded-2xl w-64 medium-15 ring-1 ring-slate-900/5 transition-all duration-300"
            }`}
          />
        </div>
        <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16 cursor-pointer">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
            />
          )}
          {!userDetails.token ? <button onClick={()=>{
            navigate("/login")
          }} className="flexCenter gap-x-2 !px-5 btn-dark cursor-pointer">
            <LuUserRound className="text-xl cursor-pointer"/>
            <span>Log In</span>
          </button> : 
          <ProfileMenu  logout={handleLogout}/>
          
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
