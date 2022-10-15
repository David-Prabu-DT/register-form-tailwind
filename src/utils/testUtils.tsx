import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const renderWithProvider = (element: React.ReactElement) => {
  render(
    <>
      <BrowserRouter>{element} </BrowserRouter>
    </>
  );
};
