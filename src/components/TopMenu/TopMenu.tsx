import { useUserStore } from "../../stores/UserStore";
import { TopMenuContainer } from "./top-menu.style";

const TopMenu = () => {
  const userEmail = useUserStore((state) => state.userEmail);
  const userFirstName = useUserStore((state) => state.userFirstName);
  const userLastName = useUserStore((state) => state.userLastName);
  const userPhoto = useUserStore((state) => state.userPhoto);
  const userId = useUserStore((state) => state.userId);

  return (
    <TopMenuContainer>
      hello
      {userEmail}
      {userFirstName}
      {userLastName}
      {userPhoto && <img src={userPhoto} alt="User Avatar" />}
      {userId !== undefined && <span>User ID: {userId}</span>}
    </TopMenuContainer>
  );
};

export default TopMenu;
