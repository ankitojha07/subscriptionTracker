import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exist!" })
        }
        // create a new user
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully", user });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message })
    }
}