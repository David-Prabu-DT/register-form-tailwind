import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithProvider } from "../../utils/testUtils";
import Login from "./Login";

describe("Login Form", () => {
  it("Login Form To Be In The Document", () => {
    window.alert = () => {};
    renderWithProvider(<Login />);

    const form = screen.getByTestId("form");
    const emailAddress = screen.getByTestId("emailAddress");
    const password = screen.getByTestId("password");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(form).toBeInTheDocument();
    expect(emailAddress).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("Should Have The Attributes", async () => {
    window.alert = () => {};
    renderWithProvider(<Login />);

    const emailAddress = screen.getByPlaceholderText("Email address");
    const password = screen.getByPlaceholderText("Password");

    expect(emailAddress).toHaveAttribute("type", "email");
    expect(password).toHaveAttribute("type", "password");
  });

  it("Should Submit The Login Form", async () => {
    renderWithProvider(<Login />);

    userEvent.type(
      screen.getByLabelText(/Email Address/i),
      "davidprabu@dorustree.in"
    );
    userEvent.type(screen.getByLabelText(/^Password$/i), "12345678");

    screen.getByRole("button", { name: "Login" }).click();
    await screen.findByRole("button", { name: "Login" });
  });
});
