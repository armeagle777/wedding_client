import { BrowserView, MobileView } from "react-device-detect";
import { useParams } from "react-router-dom";

import { Content, Alert, Loader, Skeleton } from "@/components";

import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import { getGuestInfo } from "../../api/serverApi";

const Guest = () => {
  // const { guestId } = useParams();
  // const { data, isLoading, isFetching, isError, error } = useQuery(
  //   ["guests", guestId],
  //   () => getGuestInfo(guestId),
  //   {
  //     keepPreviousData: true,
  //   }
  // );

  // if (isError) return <Alert message="Փորձեք մի փոքր ուշ" />;

  // if (isFetching || isLoading) return <Loader />;

  return (
    <MobileView>
      <div className="guest-container">
        {/* <Header /> */}
        <Content />
        {/* <Skeleton /> */}
        {/* <Footer /> */}
      </div>
    </MobileView>
  );
};

export default Guest;
