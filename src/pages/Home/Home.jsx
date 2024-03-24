import { BrowserView, MobileView } from "react-device-detect";

const Home = () => {
  return (
    <>
      <MobileView>
        <p>New Home</p>
      </MobileView>
    </>
  );
};

export default Home;
