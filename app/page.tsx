import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getTodos } from "./utils/helper";

export default async function Home() {
  const todos = await getTodos();
  console.log("todos:", todos);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-extrabold">Todo List</h1>
        <AddTask />
      </div>
      <TodoList todos={todos} />
    </main>
  );
}
