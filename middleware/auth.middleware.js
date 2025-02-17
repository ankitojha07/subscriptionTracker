import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../model/user.model.js";

export const authorize = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "Unauthorized 1" });

    const decode = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decode.userId);

    if (!user)
      return res.status(401).json({ message: "Unauthorized 2", data: decode });

    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Unauthorized access", error: error.message });
  }
};
