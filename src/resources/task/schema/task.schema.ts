import mongoose from "mongoose";


export const TaskSchema = new mongoose.Schema({
  taskTitle: String,
  description: String,
  status: Boolean,
  createDate: String,
  lastUpdate: String,
  createdBy_username: String,
  createdBy_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  assignTo_username: String,
  assignTo_userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});