import { describe, it, expect } from "vitest";
import { validateEmail, validatePassword } from "./validations";

describe("validations", () => {
  describe("validateEmail", () => {
    it.each([[undefined, ""]])(
      "returns error when email is empty: %s",
      (email?: string) => {
        expect(validateEmail(email)).toBe("Email is required");
      }
    );

    it.each([["not-an-email", "test@", "test@domain", "test@domain."]])(
      "returns error when email is invalid: %s",
      (email: string) => {
        expect(validateEmail(email)).toBe("Enter a valid email address");
      }
    );

    it.each([["test@example.com", "user.name+tag@domain.ie"]])(
      "returns undefined when email is %s",
      (email: string) => {
        expect(validateEmail(email)).toBeUndefined();
      }
    );
  });

  describe("validatePassword", () => {
    it.each([[undefined, ""]])(
      "returns error when password is %s",
      (password?: string) => {
        expect(validatePassword(password)).toBe("Password is required");
      }
    );

    it.each([["123", "abcde"]])(
      "returns error when password is less than 6 characters: %s",
      (password: string) => {
        expect(validatePassword(password)).toBe(
          "Password must be at least 6 characters"
        );
      }
    );

    it.each(["123456", "abcdef", "a1b2c3d4"])(
      "returns undefined for valid password: %s",
      (input) => {
        expect(validatePassword(input)).toBeUndefined();
      }
    );
  });
});
