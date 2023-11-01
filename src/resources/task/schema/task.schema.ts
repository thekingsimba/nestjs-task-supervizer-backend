import mongoose from "mongoose";


export const TaskSchema = new mongoose.Schema({
  taskTitle: String,
  description: String,
  status: Boolean,
  createDate: String,
  lastUpdate: String,
});