"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AddTask({ params }) {
  // const router = useRouter();
  const id = params.edittask;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getTaskDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTaskDetails = async () => {
    let taskData = await fetch(`http://localhost:3000/api/tasks/${id}`);
    taskData = await taskData.json();
    console.log(taskData);
    if (taskData.success) {
      let result = taskData.result;
      setTitle(result.title);
      setDesc(result.desc);
      setStatus(result.status);
      // router.push("/");
    }
  };

  const handleUpdate = async () => {
    const data = { title, desc, status: status === "true" ? true : false };
    console.log(data);
    let result = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result.success) {
      alert("data updated successfully");
      setTitle("");
      setDesc("");
      setStatus();
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5 w-[600px] p-10">
        <h1>Edit a Task</h1>
        <Link href="/" className="underline">
          Home
        </Link>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <div className="w-full">
          <p>Select the Status: </p>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <button
          onClick={handleUpdate}
          className="bg-cyan-400 text-white px-10 py-5"
        >
          Update
        </button>
      </div>
    </div>
  );
}
