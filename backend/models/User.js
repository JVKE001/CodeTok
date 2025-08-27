import mongoose from "mongoose";

// User Schema (blueprint)
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

// User Model (actual object for DB operations)
const User = mongoose.model("User", userSchema);

export default User;
