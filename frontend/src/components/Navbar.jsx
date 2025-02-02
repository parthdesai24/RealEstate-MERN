import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AddPropertyModal from "./AddPropertyModal";
import UserDetailsContext from "../context/UserDetailsContext";
// import useAuthCheck from "../hooks/useAuthCheck";
const Navbar = ({ containerStyles }) => {
  const [modalOpened, setModalOpened] = useState(false);
  // const { validateLogin } = useAuthCheck();
  const { userDetails } = useContext(UserDetailsContext);

  const handleAddPropertyClick = () => {
    if(userDetails?.token){
      setModalOpened(true)
    }
  }

  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Listing
      </NavLink>
      <NavLink
        to={"mailto:parth121110@gmail.com"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Contact
      </NavLink>
      <div onClick={handleAddPropertyClick} className={"py-1 cursor-pointer"}>Add property</div>
      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
    </nav>
  );
};

export default Navbar;
