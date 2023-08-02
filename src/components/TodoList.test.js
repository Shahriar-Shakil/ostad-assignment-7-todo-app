import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./Todolist";

test("render TodoList Component", () => {
  render(<TodoList />);
  const headerElement = screen.getByText("Todo List - Module 7 assignment");
  expect(headerElement).toBeInTheDocument();
});

test("add a new task to the list", () => {
  render(<TodoList />);
  // Find the input element and the "Add Task" button
  const taskInput = screen.getByPlaceholderText("Enter a new task");
  const addButton = screen.getByText("Add Task");

  // Type a new task in the input
  fireEvent.change(taskInput, { target: { value: "New Task" } });

  //click the "Add Task" button
  fireEvent.click(addButton);

  //   check if the new task is added to the list

  const newTask = screen.getByText("New Task");
  expect(newTask).toBeInTheDocument();
});
