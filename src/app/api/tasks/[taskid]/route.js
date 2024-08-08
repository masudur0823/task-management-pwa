import { connectionString } from "@/lib/db";
import { Task } from "@/lib/models/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const taskID = content.params.taskid;
  const filter = { _id: taskID };
  const payload = await request.json();
  console.log("payload", payload);
  await mongoose.connect(connectionString);
  const result = await Task.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const taskID = content.params.taskid;
  const record = { _id: taskID };
  await mongoose.connect(connectionString);
  const result = await Task.findById(record);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const taskID = content.params.taskid;
  const record = { _id: taskID };
  await mongoose.connect(connectionString);
  const result = await Task.deleteOne(record);
  return NextResponse.json({ result, success: true });
}
