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
import { useAuth } from "../../hooks/useAuth";
import { routes } from "../../App";

const TopMenu = () => {
  const navigate = useNavigate();

  const currentUser = useUserStore((state) => state.currentUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { handleLogout } = useAuth();

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
      {currentUser ? (
        <UserInfoContainer onClick={handleMenuClick}>
          <UserCard
            userFirstName={currentUser.firstName}
            userLastName={currentUser.lastName}
            userEmail={currentUser.email}
            userPhoto={currentUser.photo}
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
        <Button variant="contained" onClick={() => navigate(routes.login)}>
          Login
        </Button>
      )}
    </TopMenuContainer>
  );
};

export default TopMenu;
