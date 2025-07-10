import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../App";
import PageLayout from "../../components/PageLayout/PageLayout";

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
