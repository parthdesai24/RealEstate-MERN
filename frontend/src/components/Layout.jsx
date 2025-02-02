import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../context/UserDetailsContext";
import { useMutation } from "react-query";
import useFavourites from "../hooks/useFavourites";
import useBookings from "../hooks/useBookings";

const Layout = () => {
const navigate =useNavigate()
  useFavourites()
  useBookings()

const { userDetails } = useContext(UserDetailsContext);

useEffect(() => {
  if (userDetails?.token === null) {
    navigate('/login');
  }
}, [userDetails?.token]);
  // useEffect(() => {
  //   const getTokenAndRegister = async () => {
  //     const res = await getAccessTokenWithPopup({
  //       authorizationParams: {
  //         audience: "http://localhost:3000",
  //         scope: "openid profile email",
  //       },
  //     });
  //     localStorage.setItem("access_token", res);
  //     setUserDetails((prev) => ({ ...prev, token: res }));
  //     // console.log(res)
  //     mutate(res)
  //   };
  //   isAuthenticated && getTokenAndRegister();
  // }, [isAuthenticated]);

  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
