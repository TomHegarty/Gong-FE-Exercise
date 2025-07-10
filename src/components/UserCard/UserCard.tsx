import { Avatar } from "@mui/material";
import { stringAvatar, stringToColor } from "../../utils/avatars";
import { UserCardContainer } from "./user-card.style";

interface UserCardProps {
  userFirstName: string;
  userLastName: string;
  userPhoto?: string | undefined;
  userEmail: string;
}

const UserCard = (props: UserCardProps) => {
  const userName = `${props.userFirstName} ${props.userLastName}`;

  return (
    <UserCardContainer>
      <div className={"user-avatar"}>
        {props.userPhoto ? (
          <Avatar
            alt={userName}
            src={props.userPhoto}
            variant={"rounded"}
            sx={{ width: 32, height: 32 }}
            aria-label={"user avatar"}
          />
        ) : (
          <Avatar
            {...stringAvatar(userName)}
            variant={"rounded"}
            aria-label={"user avatar"}
            sx={{
              width: 32,
              height: 32,
              background: stringToColor(userName),
            }}
          />
        )}
      </div>
      <div className={"user-info"}>
        <b>{userName}</b> {props.userEmail}
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
