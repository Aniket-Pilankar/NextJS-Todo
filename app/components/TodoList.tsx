import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Actions from "./Actions";

interface ITodoList {
  todos: ITodos;
}

const TodoList = ({ todos }: ITodoList) => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr no</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo, _index) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{_index + 1}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                <Actions />
              </TableCell>
              <TableCell className="text-right">
                {todo.completed ? "Completed" : "Not completed"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoList;
