import { encode } from "../utils/encode";
import { useUserStore } from "../stores/UserStore";
import { fetchUserData } from "../services/RealtimeDatabaseService";
import { useNavigate } from "react-router";

export interface AuthReturnType {
  message: string;
  status: "success" | "error";
}

export const useHandleAuth = () => {
  const setUserSecret = useUserStore((state) => state.setUserSecret);
  const setUserEmail = useUserStore((state) => state.setUserEmail);
  const setUserFirstName = useUserStore((state) => state.setUserFirstName);
  const setUserLastName = useUserStore((state) => state.setUserLastName);
  const setUserPhoto = useUserStore((state) => state.setUserPhoto);
  const setUserId = useUserStore((state) => state.setUserId);
  let navigate = useNavigate();

  const setEmptyUserStore = () => {
    setUserSecret(undefined);
    setUserEmail(undefined);
    setUserFirstName(undefined);
    setUserLastName(undefined);
    setUserPhoto(undefined);
    setUserId(undefined);
  };

  const handleLogin = async (
    userEmail: string,
    userPassword: string
  ): Promise<AuthReturnType> => {
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

    // set store values
    setUserEmail(userData.email);
    setUserFirstName(userData.firstName);
    setUserLastName(userData.lastName);
    setUserPhoto(userData.photo);
    setUserId(userData.id);

    return {
      message: "Login successful",
      status: "success",
    };
  };

  const handleLogout = (): AuthReturnType => {
    setEmptyUserStore();
    navigate("/login");

    return {
      message: "LogOut successful",
      status: "success",
    };
  };

  return {
    handleLogin,
    handleLogout,
  };
};
