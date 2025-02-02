import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
  getAllFav,
  loginUser,
  toFav,
} from "../controllers/userController.js";
// import jwtCheck from "../config/auth0Config.js";
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", allBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav", getAllFav);
export { router as userRoute };
