import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { JSX } from "react";

const theme = createTheme();

const renderWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

describe("UserCard", () => {
  it("renders full name and email when all props are provided", () => {
    renderWithTheme(
      <UserCard
        userFirstName="John"
        userLastName="Doe"
        userPhoto="https://example.com/photo.jpg"
        userEmail="john.doe@example.com"
      />
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "John Doe" })).toHaveAttribute(
      "src",
      "https://example.com/photo.jpg"
    );
  });

  it("renders initials avatar when userPhoto is not provided", () => {
    renderWithTheme(
      <UserCard
        userFirstName="Jane"
        userLastName="Smith"
        userEmail="jane.smith@example.com"
      />
    );
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("jane.smith@example.com")).toBeInTheDocument();
    expect(screen.getByText("JS")).toBeInTheDocument();
  });
});
