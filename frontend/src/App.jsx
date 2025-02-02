import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Listing from "./pages/Listing";
import Property from "./pages/Property";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import UserDetailsContext from "./context/UserDetailsContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
const App = () => {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    email : "",
    favourites : [],  
    bookings : [],
    token : localStorage.getItem('token') || null
  })
  const [user,setUser] = useState(null)
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
// console.log("stores user app",storedUser)
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // console.log(parsedUser?.user?.email)
      setUserDetails(prev => ({ ...prev, email: parsedUser?.email }));
      setUserDetails(prev => ({ ...prev, token: storedToken })); // Set token separately
    } else {
      setUserDetails(prev => ({ ...prev, email: "" }));
      setUserDetails(prev => ({ ...prev, token: null }));
    }
  }, []);
  
  return (
    <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
          <Route path="/login" element={<Login />}  />
          <Route path="/signup" element={<Signup />}  />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}  />
              <Route path="/listing">
                <Route index element={<Listing />} />
                <Route path=":propertyId" element={<Property />} />
              </Route>
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </UserDetailsContext.Provider>
  );
};

export default App;
