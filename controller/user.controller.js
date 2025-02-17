import User from "../model/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Found Users", users });
  } catch (error) {
    res.status(500).json({ message: "Error occured", error: error.message });
  }
};
