import AsyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = AsyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body || req.body.data;

  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("Already have a residency with this address");
    }
    throw new Error(err.message);
  }
});

export const getAllResidencies = AsyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

export const getResidency = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({ where: { id } });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});
