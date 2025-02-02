import React, { useContext, useEffect, useRef } from "react";
import UserDetailsContext from "../context/UserDetailsContext";
// import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { getAllBookings } from "../utils/api";
const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const queryRef = useRef();
  // const { user } = useAuth0();

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  const email =  parsedUser?.email;
  //  console.log("email",storedUser,email,userDetails)a

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: email !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useBookings;
