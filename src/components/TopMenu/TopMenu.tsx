import { Button, Menu, MenuItem } from "@mui/material";
import { useUserStore } from "../../stores/UserStore";
import UserCard from "../UserCard/UserCard";
import {
  ImageContainer,
  TopMenuContainer,
  UserInfoContainer,
} from "./top-menu.style";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useHandleAuth } from "../../hooks/useHandleAuth";

const TopMenu = () => {
  const userId = useUserStore((state) => state.userId);
  let navigate = useNavigate();

  const userFirstName = useUserStore((state) => state.userFirstName);
  const userLastName = useUserStore((state) => state.userLastName);
  const userEmail = useUserStore((state) => state.userEmail);
  const userPhoto = useUserStore((state) => state.userPhoto);

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
    <TopMenuContainer>
      <ImageContainer>
        <img src="/gongLogo.svg" alt={"Gong logo"} />
        <b>Gong</b>
      </ImageContainer>
      {userId ? (
        <UserInfoContainer onClick={handleMenuClick}>
          <UserCard
            userFirstName={userFirstName}
            userLastName={userLastName}
            userEmail={userEmail}
            userPhoto={userPhoto}
          />
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>
              <Button
                variant="text"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </UserInfoContainer>
      ) : (
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      )}
    </TopMenuContainer>
  );
};

export default TopMenu;
