"use client";

import { Button } from "@/components/ui/button";
import { Pencil, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import DialogComp from "./Dialog";
import { Input } from "@/components/ui/input";
import { deleteTodo, updateTodo } from "../utils/helper";
import { toast } from "sonner";

interface ActionProps {
  todo: ITodo;
}

const Actions = ({ todo }: ActionProps) => {
  const [updatedTodoTitle, setupdatedTodoTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setupdatedTodoTitle(e.target.value);
  };

  const handleUpdate = (id: string) => async () => {
    if (!updatedTodoTitle.trim()) {
      toast("Error", {
        description: "Empty text submitted",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      return;
    }
    await updateTodo(id, updatedTodoTitle);
  };

  const handleDelete = (id: string) => async () => {
    await deleteTodo(id);
  };

  const handleToggleChange = (todo: ITodo) => async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    });
  };

  return (
    <>
      <div className="flex gap-2">
        <DialogComp
          title="Delete Todo"
          clickComponent={
            <Button variant="outline" size="icon">
              <Trash2 color="red" />
            </Button>
          }
          footer={
            <Button variant="destructive" onClick={handleDelete(todo.id)}>
              Delete
            </Button>
          }
        >
          Are you sure, you want to delete this Todo?
        </DialogComp>

        <DialogComp
          title="Edit Todo Title"
          clickComponent={
            <Button variant="outline" size="icon">
              <Pencil color="blue" />
            </Button>
          }
          footer={
            <Button
              variant="default"
              color="green"
              onClick={handleUpdate(todo.id)}
            >
              Update
            </Button>
          }
        >
          <Input
            type="text"
            placeholder="Update Todo Title"
            name="title"
            value={updatedTodoTitle}
            onChange={handleChange}
          />
        </DialogComp>

        <Button
          variant="outline"
          size="icon"
          onClick={handleToggleChange(todo)}
        >
          {todo.completed ? (
            <ToggleRight color="green" />
          ) : (
            <ToggleLeft color="grey" />
          )}
        </Button>
      </div>
    </>
  );
};

export default Actions;
