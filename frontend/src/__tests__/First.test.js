/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
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
  test("find button and click it", () => {
    screen.getByRole("button", { name: /count is 0/i });
  });
});
