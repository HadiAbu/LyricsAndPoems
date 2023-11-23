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
  test("find button and click it", async () => {
    render(<App />);
    let button = await screen.findByRole("button");
    expect(button.textContent).toBe("count is 0");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(await screen.findByText("count is 2")).toBeDefined();
  });
});
