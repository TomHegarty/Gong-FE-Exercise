import { Avatar, Menu, MenuItem } from "@mui/material";
import { stringAvatar, stringToColor } from "../../utils/avatars";
import { useUserStore } from "../../stores/UserStore";
import { UserCardContainer } from "./user-card.style";
import { useState } from "react";
import { useHandleAuth } from "../../hooks/useHandleAuth";

const UserCard = () => {
  const userFirstName = useUserStore((state) => state.userFirstName);
  const userLastName = useUserStore((state) => state.userLastName);
  const userPhoto = useUserStore((state) => state.userPhoto);
  const userEmail = useUserStore((state) => state.userEmail);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { handleLogout } = useHandleAuth();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <UserCardContainer onClick={handleMenuClick}>
        <div className="user-avatar">
          {userPhoto ? (
            <Avatar
              alt={`${userFirstName} ${userLastName}`}
              src={userPhoto}
              variant="rounded"
              sx={{ width: 32, height: 32 }}
            />
          ) : (
            <Avatar
              {...stringAvatar(`${userFirstName} ${userLastName}`)}
              variant="rounded"
              sx={{
                width: 32,
                height: 32,
                background: stringToColor(`${userFirstName} ${userLastName}`),
              }}
            />
          )}
        </div>
        <div className="user-info">
          <b>
            {userFirstName} {userLastName}
          </b>{" "}
          {userEmail}
        </div>
      </UserCardContainer>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserCard;
