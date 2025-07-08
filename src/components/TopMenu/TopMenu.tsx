import { useUserStore } from "../../stores/UserStore";
import UserCard from "../UserCard/UserCard";
import { TopMenuContainer } from "./top-menu.style";

const TopMenu = () => {
  const userId = useUserStore((state) => state.userId);

  return (
    <TopMenuContainer>
      <span>Gong</span>
      {userId ? <UserCard /> : null}
    </TopMenuContainer>
  );
};

export default TopMenu;
