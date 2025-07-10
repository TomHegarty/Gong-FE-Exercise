import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import PageLayout from "../../components/PageLayout/PageLayout";
import { routes } from "../../routes";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <h1>Page Not Found</h1>
      <Button onClick={() => navigate(routes.login)}>Return to Login</Button>
    </PageLayout>
  );
};

export default NotFoundPage;
