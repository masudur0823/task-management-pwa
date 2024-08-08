// import DeleteTask from "@/components/taskPage/DeleteTask";
import Link from "next/link";
import DeleteTask from "@/components/taskPage/DeleteTask";
import ReloadButton from "@/components/taskPage/ReloadButton";

export default async function Home() {
  const data = await getTasks();

  return (
    <main className="container mx-auto">
      <ReloadButton />
      <Link href="/addtask" className="underline ms-auto">
        Add
      </Link>
      <table className="m-auto">
        <thead>
          <tr>
            <th className="border">Title</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item?.title}</td>
              <td className="border p-2">{item?.desc}</td>
              <td className="border p-2">
                {item?.status ? "Active" : "Inactive"}
              </td>
              <td className="border p-2">
                <Link href={`/task/${item?._id}`} className="p-2 bg-green-400">
                  Edit
                </Link>
                <DeleteTask id={item?._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

// get tasks async function
const getTasks = async () => {
  let data = await fetch("https://taskmanagementpwa.netlify.app/api/tasks");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
