import "./ManagingState.css";
import {
  Component,
  ComponentTitle,
  ComponentDescription,
  SectionTitle,
} from "../ComponentsLab";

import { useState, useReducer } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      console.log("TOGGLE_TODO");
      console.log(action.payload);
      console.log(state);
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export const ManagingState = () => {
  const [todos, todosDispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <SectionTitle>Managing State</SectionTitle>

      {/* Todo list with useReducer */}
      <Component>
        <ComponentTitle>Todo list with useReducer</ComponentTitle>
        <ComponentDescription>
          A todo list with useReducer for state management.
        </ComponentDescription>
        <div className="component-demo">
          <div className="todo-input-group">
            <Input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new todo..."
            />
            <Button
              onClick={() => {
                if (newTodo.trim()) {
                  todosDispatch({ type: "ADD_TODO", payload: newTodo });
                  setNewTodo("");
                }
              }}
              variant="primary"
            >
              Add Todo ➕
            </Button>
          </div>

          <ul className="todo-list">
            {todos.length === 0 ? (
              <p className="empty-state">
                No todos yet. Add one to get started! 🚀
              </p>
            ) : (
              todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  <Checkbox
                    checked={todo.completed}
                    onChange={() =>
                      todosDispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    label={`${todo.text} {${
                      todo.completed ? "Completed" : "Not Completed"
                    }}`}
                  />
                  <Button
                    onClick={() =>
                      todosDispatch({ type: "REMOVE_TODO", payload: todo.id })
                    }
                    variant="danger"
                    className="remove-btn"
                  >
                    Remove 🗑️
                  </Button>
                </li>
              ))
            )}
          </ul>
        </div>
      </Component>
    </>
  );
};
