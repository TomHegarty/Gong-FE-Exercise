import styled from "@emotion/styled";

export const UserInfoRowContainer = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing(1),

  "& .user-avatar": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .button-spacer": {
    width: 24,
  },

  "& .user-info": {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.1,
  },
}));
