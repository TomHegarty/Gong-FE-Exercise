/**
 * Generates a color based on the input string by creating a hash from the string's
 * characters and then converting that hash into a hexadecimal color code.
 * https://mui.com/material-ui/react-avatar/
 *
 * @param string - The string to convert to a color.
 * @returns string - A hexadecimal color code.
 */
export const stringToColor = (string: string) => {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

/**
 * Creates an avatar object with a background color based on the provided name - https://mui.com/material-ui/react-avatar/
 * @param name - The name to create an avatar for with space.
 * @returns
 */
export const stringAvatar = (name: string) => {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};
