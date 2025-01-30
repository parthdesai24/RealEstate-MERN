import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "real-estate-backned.vercel.app/api",
});
const baseURL="https://real-estate-backned.vercel.app/api";

export const getAllProperties = async () => {
  try {
    console.log("apiii", api);
    const response = await axios.get(
      `${baseURL}/residency/allresd`,
      {
        timeout: 10 * 1000,
      }
    );
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await axios.post(
      `${baseURL}/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong. Please Try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await axios.post(
      `${baseURL}/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Try again please");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await axios.post(
      `${baseURL}/user/removeBooking/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Try again please");
    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await axios.post(
      `${baseURL}/user/toFav/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await axios.post(
      `${baseURL}/user/allFav`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(res);
    return res.data["favResidenciesID"];
  } catch (e) {
    toast.error("Something went wrong while fetching your fav list");
    throw e;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await axios.post(
      `${baseURL}/user/allBookings`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("res", res);
    return res.data["bookedVisits"];
  } catch (e) {
    toast.error("Something went wrong while fetching your booking list");
    throw e;
  }
};
export const createResidency = async (data, token, userEmail) => {
  const requestData = { ...data, userEmail };
  // console.log(requestData);
  try {
    const res = await axios.post(`${baseURL}/residency/create`, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw e;
  }
};
