import { BrowserView, MobileView } from "react-device-detect";
import { useParams } from "react-router-dom";

import { Content } from "@/components";

import "./styles.css";

const Guest = () => {
  const { guestId } = useParams();

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
