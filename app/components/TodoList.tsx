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
import Todo from "./Todo";

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
            <Todo key={todo.id} {...todo} srNo={_index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodoList;
