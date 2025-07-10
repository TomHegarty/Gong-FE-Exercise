import { Avatar } from "@mui/material";
import { stringAvatar, stringToColor } from "../../utils/avatars";
import { UserCardContainer } from "./user-card.style";

interface UserCardProps {
  userFirstName: string | undefined;
  userLastName: string | undefined;
  userPhoto?: string | undefined;
  userEmail: string | undefined;
}

const UserCard = (props: UserCardProps) => {
  return (
    <>
      <UserCardContainer>
        <div className="user-avatar">
          {props.userPhoto ? (
            <Avatar
              alt={`${props.userFirstName || "unnamed user"} ${
                props.userLastName
              }`}
              src={props.userPhoto}
              variant="rounded"
              sx={{ width: 32, height: 32 }}
            />
          ) : (
            <Avatar
              {...stringAvatar(`${props.userFirstName} ${props.userLastName}`)}
              variant="rounded"
              sx={{
                width: 32,
                height: 32,
                background: stringToColor(
                  `${props.userFirstName} ${props.userLastName}`
                ),
              }}
            />
          )}
        </div>
        <div className="user-info">
          <b>
            {props.userFirstName} {props.userLastName}
          </b>{" "}
          {props.userEmail}
        </div>
      </UserCardContainer>
    </>
  );
};

export default UserCard;
