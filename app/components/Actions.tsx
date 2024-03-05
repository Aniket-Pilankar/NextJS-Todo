import { Button } from "@/components/ui/button";
import { Pencil, ToggleLeft, Trash2 } from "lucide-react";
import React from "react";
import DialogComp from "./Dialog";
import { Input } from "@/components/ui/input";

const Actions = () => {
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
          footer={<Button variant="destructive">Delete</Button>}
        >
          Are you sure, you want to delete this Todo?
        </DialogComp>

        <DialogComp
          title="Edit Todo Title"
          clickComponent={
            <Button variant="outline" size="icon">
              <Pencil />
            </Button>
          }
          footer={
            <Button variant="default" color="green">
              Update
            </Button>
          }
        >
          <Input
            type="text"
            placeholder="Update Todo Title"
            name="title"
          />
        </DialogComp>

        <Button variant="outline" size="icon">
          <ToggleLeft color="grey" />
        </Button>
      </div>
    </>
  );
};

export default Actions;
