// import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewPage from "./Pages/InterviewPage";
import pricing from "./Pages/pricing";
import InterviewHistory from "./Pages/InterviewHistory";
import InterviewReport from "./Pages/InterviewReport";

// export const ServerUrl = "http://localhost:8000";
export const ServerUrl = "https://ai-interviewiq-backend.onrender.com";

// export const ServerUrl = "http://127.0.0.1:8000";

const App = () => {
  const dispatch = useDispatch();

  //find current user here--
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {
          withCredentials: true,
        });

        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/history" element={<InterviewHistory />} />
        <Route path="/pricing" element={<pricing />} />
        <Route path="/report/:id" element={<InterviewReport />} />
      </Routes>
    </div>
  );
};

export default App;
