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
import { useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { routes } from "../../routes";

const TopMenu = () => {
  const navigate = useNavigate();
  const currentUser = useUserStore((state) => state.currentUser);
  const menuAnchorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { handleLogout } = useAuth();

  return (
    <TopMenuContainer>
      <ImageContainer>
        <img src="/gongLogo.svg" alt={"Gong logo"} />
        <b>Gong</b>
      </ImageContainer>
      {currentUser ? (
        <UserInfoContainer ref={menuAnchorRef}>
          <div onClick={() => setMenuOpen(true)}>
            <UserCard
              userFirstName={currentUser.firstName}
              userLastName={currentUser.lastName}
              userEmail={currentUser.email}
              userPhoto={currentUser.photo}
            />
          </div>
          <Menu
            id="user-menu"
            anchorEl={menuAnchorRef.current}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
            >
              <LogoutIcon fontSize="small" style={{ marginRight: 8 }} />
              Logout
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
