export interface UserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  photo?: string;
  managerId?: number;
  password?: string;
}

export const fetchAllUserData = async (): Promise<UserData[]> => {
  try {
    const response = await fetch(
      `https://gongfetest.firebaseio.com/users.json`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Fetched user data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getUserIdFromSecret = async (
  userSecret: string
): Promise<string> => {
  const keyPairs = await fetch(
    `https://gongfetest.firebaseio.com/secrets/.json`
  );

  const data = await keyPairs.json();

  console.log(data);
  console.log(
    data["90070649D4F855D2197731F819F8B1D2197731F8198E5C8A213F1FC819219845"]
  );

  return data[userSecret];
};

export const fetchUserData = async (
  userSecret: string
): Promise<UserData | null> => {
  const userID = await getUserIdFromSecret(userSecret);

  console.log("User ID from secret:", userID);

  if (!userID) {
    console.error("No user ID found for the provided secret.");
    return null;
  }

  try {
    const response = await fetch(
      `https://gongfetest.firebaseio.com/users.json`
    );

    if (!response.ok) {
      console.log(response);
      console.log("no user data response");
      throw new Error();
    }

    const data = await response.json();

    const userData = (Object.values(data) as UserData[]).filter(
      (user: UserData) => user.id === Number(userID)
    );

    console.log(userData);

    return userData[0];
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
