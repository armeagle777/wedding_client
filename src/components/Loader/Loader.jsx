import { Space, Spin } from "antd";

const Loader = () => (
  <Space
    direction="horizontal"
    style={{
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spin size="large" />
  </Space>
);
export default Loader;
