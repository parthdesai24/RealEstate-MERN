import React, { useContext, useEffect, useState } from "react";
import useProperties from "../hooks/useProperties";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../utils/api";
import { PuffLoader } from "react-spinners";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import Map from "../components/Map";
// import useAuthCheck from "../hooks/useAuthCheck";
// import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import UserDetailsContext from "../context/UserDetailsContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import HeartBtn from "../components/HeartBtn";

const Property = () => {
  const [modalOpened, setModalOpened] = useState(false);
  // const { validateLogin } = useAuthCheck();
  const { pathname } = useLocation();
  // const { user } = useAuth0();
  const id = pathname.split("/").slice(-1)[0];
  // console.log(id);

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailsContext);

  const storedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(storedUser);
  const email =  parsedUser?.email;
  console.log(email)

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <span>Error while fetching property details</span>
      </div>
    );
  }
  return (
    <section className="max-padd-container my-[99px]">
      <div className="pb-2 relative">
        <img
          src={data?.image}
          alt={data?.title}
          className="rounded-tr-3xl rounded-tl-3xl max-h-[27rem] w-full object-cover aspect-square"
        />
        <div className="absolute top-8 right-8">
          <HeartBtn id={id}/>
        </div>
      </div>
      {/* CONTAINER */}
      <div className="xl:flexBetween gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="flexStart gap-x-2">
            <FaLocationDot />
            <div>
              {data?.address} {data?.city} {data?.country}
            </div>
          </p>
          <div className="flexBetween pt-3">
            <h4 className="bold-20 line-clamp-1">{data?.title}</h4>
            <div className="bold-20">${data?.price}.00</div>
          </div>
          <div className="flexBetween py-1">
            <h5 className="bold-16 my-1 text-secondary">{data?.city}</h5>
            <div className="flex items-baseline gap-2 text-secondary">
              <h4 className="bold-18 relative bottom-0.5 text-black">5.0</h4>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBed /> {data?.facilities.bedrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBathtub /> {data?.facilities.bathrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineGarage /> {data?.facilities.parkings}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <CgRuler /> 400
            </div>
          </div>
          <h4 className="h4 mt-3">Property Details</h4>
          <p className="mb-4">{data?.description}</p>
          <div className="flexBetween pt-7">
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  onClick={() => cancelBooking()}
                  variant="outline"
                  w={"100%"}
                  color="red"
                  disabled={cancelling}
                >
                  Cancel Booking
                </Button>
                <p className="text-red-500 medium-15 ml-3">
                  You've already Booked visit for{" "}
                  {bookings?.filter((bookings) => bookings?.id === id)[0].date}
                </p>
              </>
            ) : (
              <Button
                onClick={() => {
                  token && setModalOpened(true);
                }}
                variant="filled"
                w={"50%"}
                color="black"
              >
                Book the visit
              </Button>
            )}
            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={email}
            />
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <Map
            address={data?.address}
            city={data?.city}
            country={data?.country}
          />
        </div>
      </div>
    </section>
  );
};

export default Property;
