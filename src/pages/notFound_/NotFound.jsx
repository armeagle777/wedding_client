import { Link, useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const NotFound = ({
  message,
  redirectUrl = "/",
  redirectButtonText = "Վերադառնալ",
}) => {
  const navigate = useNavigate();

  const onClick = () => navigate(-1);
  return (
    <Result
      status="404"
      title="404"
      subTitle={message}
      extra={
        <Button type="primary" onClick={onClick}>
          {redirectButtonText}
        </Button>
      }
    />
  );
};

export default NotFound;
