"use client";

import { useState, useTransition } from "react";
import { createTodo, toggleTodo, deleteTodo } from "./actions";
import cuid from "cuid";

export type Todo = {
  id: string,
  title: string,
  done: boolean
};

export default function TodoList({ initialTodos }: { initialTodos: Todo[] } ) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isCreatePending, startCreateTransition] = useTransition();
  const [todos, setTodos] = useState(initialTodos);
  const [isUpdatePending, startUpdateTransition] = useTransition();
  const maxTodos = 100;

  const onCreate = (title: string) => {
    const id = cuid();
    const done = false;

    setTodos((prev) =>
      [ { id, title, done }, ...prev, ]   
    );

    startCreateTransition(async() => {
      try {
        await createTodo(id, title, done);
      } catch {
        setTodos((prev) =>
          prev.filter((t) => t.title != title)
        );
      }
    });

    setNewTodoTitle("");
  };

  const onToggle = (id: string, checked: boolean) => {
    setTodos((prev) => 
      prev.map((t) => (t.id === id ? { ...t, done: checked } : t))
    );

    startUpdateTransition(async() => {
      try {
        await toggleTodo(id, checked);
      } catch {
        setTodos((prev) => 
          prev.map((t) => (t.id === id ? { ...t, done: !checked} : t))
        )
      }
    });
  }

  const onDelete = async(id: string) => {
    try {
      await deleteTodo(id);

      setTodos((prev) =>
        prev.filter((t) => t.id != id)
      );
    } catch { }
  }

  return (
    <>
      <div className="space-y-6">
        {/* Add Todo Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreate(newTodoTitle);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Add a todo..."
            value={newTodoTitle}
            disabled={isCreatePending || todos.length >= maxTodos}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            className="flex-1 input-textbox"
          />
          <button
            type="submit"
            disabled={isCreatePending || todos.length >= maxTodos}
            className="input-button"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 hover:bg-gray-100"
            >
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={(e) => onToggle(t.id, e.target.checked)}
                  disabled={isUpdatePending}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                />
                <span
                  className={
                    t.done
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }
                >
                  {t.title}
                </span>
              </label>
              <button
                onClick={async() => await onDelete(t.id)}
                className="ml-3 text-gray-400 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          ))}
          {todos.length === 0 && (
            <p className="text-gray-500 text-sm">No todos yet.</p>
          )}
        </div>
      </div>
    </>
  );
}