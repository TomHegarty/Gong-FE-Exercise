import { Button } from "@mui/material";
import { useUserStore } from "../../stores/UserStore";
import UserCard from "../UserCard/UserCard";
import { ImageContainer, TopMenuContainer } from "./top-menu.style";
import { useNavigate } from "react-router";

const TopMenu = () => {
  const userId = useUserStore((state) => state.userId);
  let navigate = useNavigate();

  return (
    <TopMenuContainer>
      <ImageContainer>
        <img src="/gongLogo.svg" alt={"gong logo"} />
        <b>Gong</b>
      </ImageContainer>
      {userId ? (
        <UserCard />
      ) : (
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      )}
    </TopMenuContainer>
  );
};

export default TopMenu;
