"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = async () => {
    const data = { title, desc, status: status === "true" ? true : false };
    console.log(data);
    let result = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result.success) {
      // alert("data added successfully");
      setTitle("");
      setDesc("");
      setStatus();
      // redirect("/");
      router.push("/");
      // window.location.reload();
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5 w-[600px] p-10">
        <h1>Add a Task</h1>
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
        <div className="w-full" onChange={(e) => setStatus(e.target.value)}>
          <p>Select the Status: </p>
          <div>
            <input type="radio" id="active" name="status" value={true} />
            <label for="active">Active</label> <br />
            <input type="radio" id="inactive" name="status" value={false} />
            <label for="inactive">Inactive</label> <br />
          </div>
        </div>
        {/* <input type="check" /> */}
        {/* <input
        type="text"
        value={title}
        onChange={(e) => setStatus(e.target.value)}
        alt="title"
      /> */}
        <button
          onClick={handleSubmit}
          className="bg-cyan-400 text-white px-10 py-5"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
