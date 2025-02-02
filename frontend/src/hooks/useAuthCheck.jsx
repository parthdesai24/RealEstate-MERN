import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
const useAuthCheck = () => {
  const { isAuthenticated } = useAuth0();
  const validateLogin = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in", { position: "bottom-right" });
    } else return true;
  };
  return { validateLogin };
};

export default useAuthCheck;


// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";

// const useAuthCheck = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication state on component mount
//   useEffect(() => {
//     // Assuming you're storing the token or user session in localStorage or cookies
//     const token = localStorage.getItem("authToken"); // Example of using a token

//     if (token) {
//       setIsAuthenticated(true); // If token exists, user is authenticated
//     } else {
//       setIsAuthenticated(false); // Otherwise, user is not authenticated
//     }
//   }, []);

//   const validateLogin = () => {
//     if (!isAuthenticated) {
//       toast.error("You must be logged in", { position: "bottom-right" });
//     } else {
//       return true;
//     }
//   };

//   return { validateLogin, isAuthenticated };
// };

// export default useAuthCheck;
