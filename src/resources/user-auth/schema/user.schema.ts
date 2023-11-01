import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phoneNumber: String,
  isActive: Boolean
})