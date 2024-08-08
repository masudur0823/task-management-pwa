export const getTasks = async () => {
  let data = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-cache",
  });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
