//AUTHENTICATION ke liye controller app bnayenge here----
//1- Frontend se kuch data layenge pehle---
//2- create user
//3- generate TOKEN and then store it in a COOKIE--

import genToken from "../config/token.js";
import User from "../Models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    //CHECK USER EXIST OR NOT--
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    //generate token and store in cookie while login and signIN---
    let token = await genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Google auth error ${error}` });
  }
};

//CONTROLLER FOR LOGOUT----
export const logOut = async (req, res) => {
  try {
    await res.clearCookie("token");
    return res.status(200).json({ message: "logOut Successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Logout Error ${error}` });
  }
};
