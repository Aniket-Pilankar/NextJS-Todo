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

interface ITodoProps extends ITodo {
  srNo: number;
}

const Todo = ({ srNo, ...todo }: ITodoProps) => {
  console.log("srNo:", srNo);
  return (
    <TableRow key={todo.id}>
      <TableCell className="font-medium">{srNo + 1}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>
        <Actions todo={todo} />
      </TableCell>
      <TableCell className="text-right">
        {todo.completed ? "Completed" : "Not completed"}
      </TableCell>
    </TableRow>
  );
};

export default Todo;
