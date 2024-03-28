import { Button } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";

const MarkerButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      icon={<FaMapMarkerAlt />}
      type="text"
      // style={{
      //   color: "red",
      //   outline: "none",
      //   border: "none",
      //   background: "transparent",
      // }}
    >
      {text}
    </Button>
  );
};

export default MarkerButton;
