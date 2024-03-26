import { Flex, Space, Skeleton as AntSkeleton } from "antd";

const Skeleton = () => {
  return (
    <Space
      // vertical
      style={{ width: "100vw", height: "100vh", backgroundColor: "#cecece" }}
      align="flex-start"
    >
      <Flex
        style={{ width: "100vw", height: 400, backgroundColor: "red" }}
        align="center"
        justify="flex-end"
      >
        <Space style={{ width: 200, height: 200, backgroundColor: "yellow" }}>
          {/* <AntSkeleton.Avatar loading={true} active /> */}
          {/* <AntSkeleton.Avatar loading={true} active shape="square" /> */}
          <AntSkeleton.Input loading={true} active paragraph rows={1} />
          {/* <AntSkeleton.Input loading={true} active title width={200} /> */}
        </Space>
      </Flex>
    </Space>
  );
};

export default Skeleton;
