import { BrowserView, MobileView } from "react-device-detect";

import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

import "./styles.css";

const Guest = () => {
  return (
    <MobileView>
      <div className="guest-container">
        {/* <Header /> */}
        <Content />
        {/* <Footer /> */}
      </div>
    </MobileView>
  );
};

export default Guest;
