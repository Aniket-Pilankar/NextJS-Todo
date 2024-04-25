"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { handleSubmit } from "@/actions/todo.action";

const initialState: ITodo = {
  id: "",
  title: "",
  completed: false,
};

const AddTask = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  // const router = useRouter();
  // const [title, setTitle] = useState("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const newTodo = {
  //     id: nanoid(),
  //     title,
  //     completed: false,
  //   };
  //   console.log("newTodo:", newTodo);

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTodo),
  //   });
  //   console.log("res:", res);
  //   setTitle("");
  //   router.refresh();
  // };

  // return (
  //   <form
  //     className="flex w-full max-w-sm items-center space-x-2 m-auto"
  //     onSubmit={handleSubmit}
  //   >
  //     <Input
  //       type="text"
  //       placeholder="Enter Todo"
  //       name="title"
  //       value={title}
  //       onChange={handleChange}
  //     />
  //     <Button onClick={() => console.log("Hello")}>Add New Todo</Button>
  //   </form>

  // SERVER_ACTION_

  // const handleSubmit = async (formData: FormData) => {
  //   "use server";

  //   const newTodo = {
  //     id: nanoid(),
  //     title: formData.get("title"),
  //     completed: false,
  //   };

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newTodo),
  //   });

  //   revalidatePath("/");
  // };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2 m-auto"
      action={(formData) => {
        handleSubmit(formData);
        ref.current?.reset();
      }}
      ref={ref}
    >
      <Input type="text" placeholder="Enter Todo" name="title" />
      <Button type="submit">Add New Todo</Button>
    </form>
  );
};

export default AddTask;
