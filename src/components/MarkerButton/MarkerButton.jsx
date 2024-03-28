import { FaMapMarkerAlt } from "react-icons/fa";

const MarkerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: "red",
        outline: "none",
        border: "none",
        background: "transparent",
      }}
    >
      <FaMapMarkerAlt />
    </button>
  );
};

export default MarkerButton;
