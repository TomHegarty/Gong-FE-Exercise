export const validateEmail = (email: string | undefined) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Enter a valid email address";

  return undefined;
};

export const validatePassword = (password: string | undefined) => {
  if (!password) return "Password is required";

  if (password.length < 6) return "Password must be at least 6 characters";
  return undefined;
};
