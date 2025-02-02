import React, { useContext, useEffect, useRef } from "react";
import UserDetailsContext from "../context/UserDetailsContext";
// import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { getAllFav } from "../utils/api";

const useFavourites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const queryRef = useRef();
  // const { user } = useAuth0();

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  const email =  parsedUser?.email;
  // console.log(email)
  
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllFav(email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favourites: data })),
    enabled: email !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

    useEffect(() => {
    if (userDetails?.token) {
      queryRef.current && queryRef.current();  // Refetch when token changes
    }
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useFavourites;
