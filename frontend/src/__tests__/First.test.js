/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("first test here", () => {
  test("first basic test", () => {
    render(<App />);
    expect(5).not.toBe(6);
  });
  test("second basic test", () => {
    render(<App />);
    expect(5).toBe(5);
  });
  test("find button and click it with userEvent", async () => {
    render(<App />);
    const user = userEvent.setup();

    let button = await screen.findByRole("button");
    expect(button.textContent).toBe("count is 0");
    user.click(button);
    user.click(button);
    expect(await screen.findByText("count is 2")).toBeDefined();
  });
  test("find button and click it with fireEvent", async () => {
    render(<App />);
    let button = await screen.findByRole("button");
    expect(button.textContent).toBe("count is 0");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(await screen.findByText("count is 2")).toBeDefined();
  });
  test("type in an input field and check it", async () => {
    render(<App />);

    let input = await screen.findByRole("textbox");
    //anthor way to find the same element
    // let input = await screen.findByPlaceholderText("talk dirty to me");

    expect(input.textContent).toBe("");
    fireEvent.change(input, { target: { value: "tacos" } });
    expect(input.value).toBe("tacos");
  });
  test("make sure a checkbox is checked", async () => {
    render(<App />);

    let checkbox = await screen.findByRole("checkbox");
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });
});
