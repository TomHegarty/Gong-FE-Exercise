export interface UserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  photo?: string;
  managerId?: number;
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

  return data[userSecret];
};

export const fetchUserData = async (userSecret: string): Promise<UserData> => {
  const userID = await getUserIdFromSecret(userSecret);

  try {
    const response = await fetch(
      `https://gongfetest.firebaseio.com/users.json`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
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
