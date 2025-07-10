import { encode } from "../utils/encode";
import { useUserStore } from "../stores/UserStore";
import { fetchUserData } from "../services/RealtimeDatabaseService";
import { useNavigate } from "react-router";
import type { ServiceResponse } from "../types/ServiceResponse";
import { routes } from "../routes";

export const useAuth = () => {
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const setEmptyUserStore = () => {
    setCurrentUser(undefined);
  };

  const handleLogin = async (
    userEmail: string,
    userPassword: string
  ): Promise<ServiceResponse> => {
    const userSecret = encode(userEmail, userPassword);

    if (!userSecret) {
      setEmptyUserStore();
      return {
        message: "Login failed: Invalid credentials",
        status: "error",
      };
    }

    const userData = await fetchUserData(userSecret);

    if (!userData) {
      setEmptyUserStore();
      return {
        message: "Login failed: User data not found",
        status: "error",
      };
    }

    setCurrentUser({ ...userData });

    return {
      message: "Login successful",
      status: "success",
    };
  };

  const handleLogout = () => {
    setEmptyUserStore();
    navigate(routes.login);
  };

  return {
    handleLogin,
    handleLogout,
  };
};
