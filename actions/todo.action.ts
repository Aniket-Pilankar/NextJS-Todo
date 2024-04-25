"use server";

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export const handleSubmit = async (formData: FormData) => {
  const newTodo = {
    id: nanoid(),
    title: formData.get("title"),
    completed: false,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  revalidatePath("/");
};
