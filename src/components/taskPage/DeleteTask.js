"use client";
import { useRouter } from "next/navigation";

export default function DeleteTask({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    let response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "delete",
    });
    response = await response.json();
    if (response.success) {
      router.push("/");
      // window.location.reload();
    }
  };
  return (
    <button onClick={handleDelete} className="p-2  bg-red-400">
      Del
    </button>
  );
}
