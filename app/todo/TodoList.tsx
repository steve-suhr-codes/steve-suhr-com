"use client";

import { useState, useTransition } from "react";
import { toggleTodo } from "./actions";

export type Todo = {
  id: string,
  title: string,
  done: boolean
};

export default function TodoList({ initialTodos }: { initialTodos: Todo[] } ) {
  const [todos, setTodos] = useState(initialTodos);
  const [isPending, startTransition] = useTransition();

  const onToggle = (id: string, checked: boolean) => {
    setTodos((prev) => 
      prev.map((t) => (t.id === id ? { ...t, done: checked } : t))
    );

    startTransition(async() => {
      try {
        await toggleTodo(id, checked);
      } catch {
        setTodos((prev) => 
          prev.map((t) => (t.id === id ? { ...t, done: !checked} : t))
        )
      }
    });
  }

  return (
    <div className="space-y-3">
      {todos.map((t) => (
        <label key={t.id} className="flex items-center gap-3">
          <input 
            type="checkbox"
            checked={t.done}
            onChange={(e) => onToggle(t.id, e.target.checked)}
            disabled={isPending}
          />
          <span className={t.done ? "line-through text-gray-500" : ""}>
            {t.title}
          </span>
        </label>
      ))}
      {todos.length === 0 && <p className="text-gray-500">No todos yet.</p>}
    </div>
  );
}