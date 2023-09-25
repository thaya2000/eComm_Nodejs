// const express = require("express");

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));


app.use("/api", authRoutes);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
