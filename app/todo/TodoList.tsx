"use client";

import { useState, useTransition } from "react";
import { createTodo, toggleTodo, deleteTodo } from "./actions";
import cuid from "cuid";

export type Todo = {
  id: string,
  title: string,
  done: boolean
};

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isCreatePending, startCreateTransition] = useTransition();
  const [todos, setTodos] = useState(initialTodos);
  const [isUpdatePending, startUpdateTransition] = useTransition();

  const onCreate = (title: string) => {
    const id = cuid();
    setTodos((prev) => [{ id, title, done: false }, ...prev]);
    startCreateTransition(async () => {
      try {
        await createTodo(id, title, false);
      } catch {
        setTodos((prev) => prev.filter((t) => t.title !== title));
      }
    });
    setNewTodoTitle("");
  };

  const onToggle = (id: string, checked: boolean) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: checked } : t)));
    startUpdateTransition(async () => {
      try {
        await toggleTodo(id, checked);
      } catch {
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !checked } : t)));
      }
    });
  };

  const onDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch {}
  };

  return (
    <div className="todo-list">
      <form
        onSubmit={(e) => { e.preventDefault(); onCreate(newTodoTitle); }}
        className="todo-form"
      >
        <input
          type="text"
          placeholder="Add a todo…"
          value={newTodoTitle}
          disabled={isCreatePending || todos.length >= 100}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          className="todo-input"
        />
        <button
          type="submit"
          disabled={isCreatePending || todos.length >= 100}
          className="todo-add-btn"
        >
          Add
        </button>
      </form>

      <ul className="todo-items">
        {todos.map((t) => (
          <li key={t.id} className={`todo-item${t.done ? " todo-item--done" : ""}`}>
            <label className="todo-item-label">
              <input
                type="checkbox"
                checked={t.done}
                onChange={(e) => onToggle(t.id, e.target.checked)}
                disabled={isUpdatePending}
                className="todo-checkbox"
              />
              <span className="todo-item-title">{t.title}</span>
            </label>
            <button
              onClick={() => onDelete(t.id)}
              className="todo-delete-btn"
              aria-label="Delete"
            >
              ✕
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="todo-empty">No todos yet.</li>
        )}
      </ul>
    </div>
  );
}
