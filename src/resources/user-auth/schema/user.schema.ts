import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phoneNumber: String
})