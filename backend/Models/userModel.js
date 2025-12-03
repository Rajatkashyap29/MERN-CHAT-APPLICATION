import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profilePic: {
      type: String,
      default: "https://avatar-placeholder.png",
    },

    // For real-time chat
    isOnline: {
      type: Boolean,
      default: false,
    },

    lastSeen: {
      type: Date,
      default: Date.now,
    },

    // Optional: for JWT tokens, sessions, etc.
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Add index for name + email search
userSchema.index({ name: "text", email: "text" });

const User = mongoose.model("User", userSchema);

export default User;
