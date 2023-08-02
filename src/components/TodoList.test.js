import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./Todolist";
// 1
test("render TodoList Component", () => {
  render(<TodoList />);
  const headerElement = screen.getByText("Todo List - Module 7 assignment");
  expect(headerElement).toBeInTheDocument();
});
// 2
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
// 3
test("deletes a task from list", () => {
  render(<TodoList />);

  // add a task to the list
  const taskInput = screen.getByPlaceholderText("Enter a new task");
  const addButton = screen.getByText("Add Task");
  fireEvent.change(taskInput, { target: { value: "Task to be deleted" } });
  fireEvent.click(addButton);

  // Find the "Delete" button
  const deleteButton = screen.getByText("Delete");

  //click the "Delete" button
  fireEvent.click(deleteButton);
  // Check if the task is removed from the list
  const deletedTask = screen.queryByText("Task to be deleted");
  expect(deletedTask).not.toBeInTheDocument();
});
//4
// Test: Displays 'No tasks added yet.' when no tasks are added
test("displays 'No tasks added yet.' when no tasks are added", () => {
  render(<TodoList />);
  const noTasksMessage = screen.getByText("No tasks added yet.");
  expect(noTasksMessage).toBeInTheDocument();
});
