import { isDesktop } from "react-device-detect";

import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/slicknav.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/fontawesome-all.min.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/slick.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/style.css";

import profileImage from "../../assets/profile.jpg";
import circleImage from "../../assets/hero_circle.png";
import serviceOneImage from "../../assets/service1.png";
import vanqImage from "../../assets/harijavanq.png";
import flowerOne from "../../assets/services_flower1.png";

import leftFlower from "../../assets/form-smoll-left.png";
import rightFlower from "../../assets/form-smoll-right.png";
import bRightFlower from "../../assets/form-smoll-b-left.png";
import bLeftFlower from "../../assets/form-smoll-b-right.png";
import topFlower from "../../assets/from-top.png";
import bottomFlower from "../../assets/from-bottom.png";

import storyFlRight from "../../assets/flower_right.png";
import storyFlLeft from "../../assets/shape_left.png";
import storyShapeRight from "../../assets/shape_right.png";
import storyFlTop from "../../assets/flower_top.png";

import { AcceptSection, GuestTableSection, MarkerButton } from "@/components";
import { Button } from "antd";

const Content = () => {
  const invitedPersonName = `Սիրելիներ.`;

  // Function to open Google Maps with the given location
  // const openGoogleMap = ({ target }) => {
  //   const locations = {
  //     church: "Հառիճավանք",
  //     restaurant: "Victoria Wedding Hall",
  //   };
  //   const location = locations[target];
  //   const url = `https://www.google.com/maps/search/?api=1&query=${location}`;

  //   if (isDesktop) {
  //     window.open(url, "_blank");
  //   } else {
  //     window.open(`geo:0,0?q=${location}`, "_blank");
  //   }
  // };
  const openGoogleMap = ({ target }) => {
    const locations = {
      church: "Հառիճավանք",
      restaurant: "Victoria Wedding Hall",
    };
    const location = locations[target];

    if (isDesktop) {
      const url = `https://www.google.com/maps/search/?api=1&query=${location}`;
      window.open(url, "_blank");
    } else {
      // Check if iOS device
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (iOS) {
        // Open in Google Maps app using universal link
        const url = `https://maps.apple.com/?q=${location}`;
        window.open(url, "_blank");
      } else {
        // Open in other mobile devices using geo URI scheme
        const url = `geo:0,0?q=${location}`;
        window.open(url, "_blank");
      }
    }
  };

  const onConfirm = () => {
    //functionality to add event to calendar
    alert("Confirmed");
  };

  return (
    <>
      <div className="slider-area">
        <div className="slider-active">
          <div
            className="single-slider slider-height hero-overly d-flex align-items-center"
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundSize: "cover",
              backgroundColor: "red",
            }}
          >
            <div
              className="container"
              style={{
                position: "relative",
              }}
            >
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 col-md-9 ">
                  <div className="hero__caption text-center d-flex align-items-center caption-bg">
                    <div
                      style={{
                        // backgroundImage: `url(${circleImage})`,
                        backgroundSize: "cover",
                        // borderRadius: "50%",
                        width: 240,
                        height: 240,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        right: 165,
                        bottom: 60,
                      }}
                    >
                      <div className="circle-caption">
                        <span data-animation="fadeInUp" data-delay=".3s">
                          Ապրիլի 5, 2024
                        </span>
                        <h1 data-animation="fadeInUp" data-delay=".5s">
                          Հրայր & Շողիկ
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".9s">
                          Մենք ամուսնանում ենք
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Our-story-area story-padding"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="story-img mb-100">
                <div className="shape-flower-img">
                  <img src={storyFlTop} className="flower-top" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-caption">
                <img src={storyFlRight} alt="" />
                <p>{invitedPersonName}</p>
                <p>Սիրով հրավիրում ենք մեր հարսանեկան արարողությանը:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-flower d-none d-xl-block">
          <img src={storyFlLeft} className="flower1" alt="" />
          <img src={storyShapeRight} className="flower2 " alt="" />
        </div>
      </div>
      <div className="service-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="singl-services text-center mb-60">
                <div className="top-caption">
                  <h4>Պսակադրություն</h4>
                  <p>Ապրիլի 5, 2024</p>
                </div>
                <div className="services-img">
                  <img
                    src={vanqImage}
                    alt=""
                    style={{ width: 250, height: 250 }}
                  />
                  <div className="back-flower">
                    <img src={flowerOne} alt="" />
                  </div>
                </div>
                <div className="bottom-caption">
                  <span>15:00-16:00</span>
                  <p>
                    Հառիճավանք
                    <br />
                    <MarkerButton
                      onClick={() => openGoogleMap({ target: "church" })}
                    />
                    <button
                      style={{
                        outline: "none",
                        color: "#000",
                        border: 0,
                        background: "transparent",
                        marginLeft: 4,
                      }}
                      onClick={() => openGoogleMap({ target: "church" })}
                    >
                      ՀՀ, Շիրակի մարզ, գ. Հառիճ
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singl-services text-center mb-60">
                <div className="top-caption">
                  <h4>Հարսանյաց հանդես</h4>
                  <p>Ապրիլի 5, 2024</p>
                </div>
                <div className="services-img">
                  <img src={serviceOneImage} alt="" />
                  <div className="back-flower">
                    <img src={flowerOne} alt="" />
                  </div>
                </div>
                <div className="bottom-caption">
                  <span>18:00-23:59</span>
                  <p>
                    «Վիկտորիա» ռեստորան
                    <br />{" "}
                    <MarkerButton
                      onClick={() => openGoogleMap({ target: "restaurant" })}
                    />
                    <button
                      style={{
                        outline: "none",
                        color: "#000",
                        border: 0,
                        background: "transparent",
                        marginLeft: 4,
                      }}
                      onClick={() => openGoogleMap({ target: "restaurant" })}
                    >
                      ՀՀ, ք. Գյումրի, Մ. Խորենացի 10/3
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contact-form section-padding2 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="form-wrapper">
                <AcceptSection onConfirm={onConfirm} />
                <GuestTableSection />
                <div className="shape-inner-flower">
                  <img src={leftFlower} className="top1" alt="" />
                  <img src={rightFlower} className="top2" alt="" />
                  <img src={bRightFlower} className="top3" alt="" />
                  <img src={bLeftFlower} className="top4" alt="" />
                </div>
                <div className="shape-outer-flower">
                  <img src={topFlower} className="outer-top" alt="" />
                  <img src={bottomFlower} className="outer-bottom" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <footer>
        <div className="footer-main footer-bg">
          <div className="footer-area pt-4">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p className="info1">Designed By</p>
                          <p className="info2">Tigran Yeranyan</p>
                          <p className="info2">tyeranyan@gmail.com</p>
                          <p className="info2">+(374) 98 - 35 - 20 - 11</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Content;
