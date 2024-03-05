export const getTodos = async (): Promise<ITodos> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`,
    { cache: "no-store" }
  );
  return await response.json();
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
export const updateTodo = async (id: string, title: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    }
  );
  const res = await response.json();
  console.log("res:", res);
};
