import User from "../models/User.js";

/** 
 * Controller function to register a new user 
 * ---------------------------------
 * Extracts username, email and password from the request body
 * Check if a user with the given email already exists; return 400 if yes
 * Creates a new user in the database
 * Returns a success response with the created user's ID, username and email
 * Handles any errors and returns a 500 status code with the error message
*/
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await User.create({ username, email, password });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Controller function to log in an existing user
 * -----------------------------------
 * Extracts email and password from the request body
 * Searches the database for a user with the given email
 * - If not found returns 404 "User not found"
 * Compared the provided password to stored password 
 *  - Currently the plain text check (⚠️ should use bcrypt hashing for security)
 *  - If the password does not match, returns 400 "Invalid password"
 * If log in is successful, return a 200 response with a success message and the user's ID, username and email
 * Catches unexpected errors and responds with 500 "Internal Server Error"
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password (simple comparison for now later we add hash it with bcrypt)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invaild password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
