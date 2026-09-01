//create server here--
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDb from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./Routes/auth.route.js";
import userRouter from "./Routes/user.route.js";
import interviewRouter from "./Routes/interview.route.js";
// import path from "path";

//connectivity between FRONTEND AND BACKEND HERE----

//MIDDLEWARE---
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// const _dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

//APIs here--
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);

app.get("/", (req, res) => {
  res.send("AI InterviewIQ Backend is Working!");
});

const PORT = process.env.PORT || 6000;

// app.use(express.static(path.join(_dirname, "/Client/dist")));

// app.get("*", (_, res) => {
//   res.sendFile(path.resolve(_dirname, "Client", "dist", "index.js"));
// });

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
  connectDb();
});
