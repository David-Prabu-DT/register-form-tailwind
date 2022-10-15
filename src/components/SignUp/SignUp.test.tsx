import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithProvider } from "../../utils/testUtils";
import SignUp from "./SignUp";

describe("SignUp Form", () => {
  it("SignUp Form To Be In The Document", () => {
    window.alert = () => {};
    renderWithProvider(<SignUp />);

    const form = screen.getByTestId("form");
    const username = screen.getByTestId("username");
    const emailAddress = screen.getByTestId("emailAddress");
    const password = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirmPassword");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(form).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(emailAddress).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("Should Have The Attributes", async () => {
    window.alert = () => {};
    renderWithProvider(<SignUp />);

    const username = screen.getByPlaceholderText("Username");
    const emailAddress = screen.getByPlaceholderText("Email address");
    const password = screen.getByPlaceholderText("Password");
    const confirmPassword = screen.getByPlaceholderText("Confirm Password");

    expect(username).toHaveAttribute("type", "text");
    expect(emailAddress).toHaveAttribute("type", "email");
    expect(password).toHaveAttribute("type", "password");
    expect(confirmPassword).toHaveAttribute("type", "password");
  });

  it("Should Submit The SignUp Form", async () => {
    renderWithProvider(<SignUp />);

    userEvent.type(
      screen.getByLabelText(/Email Address/i),
      "davidprabu@dorustree.in"
    );
    userEvent.type(screen.getByLabelText(/^Password$/i), "12345678");

    screen.getByRole("button", { name: "SignUp" }).click();
    await screen.findByRole("button", { name: "SignUp" });
  });
});
