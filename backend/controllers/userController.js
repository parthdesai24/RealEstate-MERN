import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// export const createUser = asyncHandler(async (req, res) => {
//   console.log("Creating a User");

//   let { email } = req.body;
//   const userExists = await prisma.user.findUnique({ where: { email } });
//   if (!userExists) {
//     const user = await prisma.user.create({ data: req.body });
//     res.send({
//       message: "User registered successfully",
//       user: user,
//     });
//   } else {
//     res.status(201).json({ message: "User already registered" });
//   }
// });
export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a User");

  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    return res.status(400).json({ message: "User already registered" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  // Generate JWT Token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    message: "User registered successfully",
    user: { id: user.id, name: user.name, email: user.email },
    token,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  console.log("User Logging In");

  const { email, password } = req.body;

  // Find user by email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Generate JWT Token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    message: "Login successful",
    user: { id: user.id, name: user.name, email: user.email },
    token,
  });
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({ message: "Bookings not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking canceled successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "Removed from Favourite", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res.send({ message: "Updated Favorites", user: updateUser });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const getAllFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResd = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    if (!favResd) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send(favResd);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
