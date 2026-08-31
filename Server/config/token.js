//GENERATE TOKEN HERE---

import jwt from "jsonwebtoken";

const genToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token; //to STORE TOKEN---
  } catch (error) {
    console.log(error);
  }
};

export default genToken;
