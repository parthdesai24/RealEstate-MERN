import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
// import useAuthCheck from "../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import UserDetailsContext from "../context/UserDetailsContext";
// import { useAuth0 } from "@auth0/auth0-react";
import { toFav } from "../utils/api";
import { checkFavourites, updateFavourites } from "../utils/common";

const HeartBtn = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  // const { validateLogin } = useAuthCheck();
  // const { user } = useAuth0();
  const {
    userDetails: { token, favourites,email },
    setUserDetails,
  } = useContext(UserDetailsContext);

  // console.log(email)
  const { mutate } = useMutation({
    mutationFn: () => toFav(id, email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id, prev.favourites),
      }));
    },
  });

  const handleLike = () => {
    if (token) {
      mutate();
      setHeartColor((prev) => (prev === "#8ac243" ? "white" : "#8ac243"));
    }
  };

  useEffect(() => {
    setHeartColor(() => checkFavourites(id, favourites));
  }, [favourites]);
  return (
    <FaHeart
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
      color={heartColor}
      size={23}
      className="cursor-pointer drop-shadow-sm"
    />
  );
};

export default HeartBtn;
