import mongoose from "mongoose";

const taskModel = new mongoose.Schema(
  {
    title: { type: String },
    desc: String,
    status: Boolean,
  },
  { timestamps: true }
);

export const Task = mongoose.models.tasks || mongoose.model("tasks", taskModel);
