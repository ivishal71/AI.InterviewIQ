import express from "express";
import isAuth from "../Middlewares/isAuth.js";
import {
  analyzeResume,
  finishInterview,
  generateQuestion,
  getInterviewReport,
  getMyInterviews,
  submitAnswer,
} from "../Controllers/interview.controller.js";
import { upload } from "../Middlewares/Multer.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume);

interviewRouter.post("/generate-questions", isAuth, generateQuestion);
interviewRouter.post("/submit-answer", isAuth, submitAnswer);
interviewRouter.post("/finish", isAuth, finishInterview);

interviewRouter.get("/get-interview", isAuth, getMyInterviews);
interviewRouter.get("/report/:id", isAuth, getInterviewReport);

export default interviewRouter;
