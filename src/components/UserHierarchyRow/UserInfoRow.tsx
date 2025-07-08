import type { UserData } from "../../services/RealtimeDatabaseService";
import { UserInfoRowContainer } from "./user-info-row.style";
import { Avatar } from "@mui/material";
import { stringAvatar, stringToColor } from "../../utils/avatars";

interface UserInfoRowProps {
  userData: UserData;
}

const UserInfoRow = (props: UserInfoRowProps) => {
  return (
    <UserInfoRowContainer>
      <div className="user-avatar">
        {props.userData.photo ? (
          <Avatar
            alt={`${props.userData.firstName} ${props.userData.lastName}`}
            src={props.userData.photo}
            variant="rounded"
            sx={{ width: 32, height: 32 }}
          />
        ) : (
          <Avatar
            {...stringAvatar(
              `${props.userData.firstName} ${props.userData.lastName}`
            )}
            variant="rounded"
            sx={{
              width: 32,
              height: 32,
              background: stringToColor(
                `${props.userData.firstName} ${props.userData.lastName}`
              ),
            }}
          />
        )}
      </div>
      <div className="user-info">
        <b>
          {props.userData.firstName} {props.userData.lastName}
        </b>
        {props.userData.email}
      </div>
    </UserInfoRowContainer>
  );
};

export default UserInfoRow;
