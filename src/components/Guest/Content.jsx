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

const Content = () => {
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
                // backgroundColor: "red",
              }}
            >
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 col-md-9 ">
                  <div className="hero__caption text-center d-flex align-items-center caption-bg">
                    <div
                      style={{
                        backgroundColor: "red",
                        borderRadius: "50%",
                        width: 200,
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        right: 185,
                        bottom: 80,
                      }}
                    >
                      <div className="circle-caption">
                        <span data-animation="fadeInUp" data-delay=".3s">
                          Feb 14 2020
                        </span>
                        <h1 data-animation="fadeInUp" data-delay=".5s">
                          Julia & Jakson
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".9s">
                          We are getting married
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

      <div className="service-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="singl-services text-center mb-60">
                <div className="top-caption">
                  <h4>Rehearsal Dinner</h4>
                  <p>July 20, 2020</p>
                </div>
                <div className="services-img">
                  <img src="assets/img/service/service1.png" alt="" />
                  <div className="back-flower">
                    <img src="assets/img/service/services_flower1.png" alt="" />
                  </div>
                </div>
                <div className="bottom-caption">
                  <span>12:00PM-2:00PM</span>
                  <p>
                    The Sierra Resort 14
                    <br /> Pacific Grove Monterey, CA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singl-services text-center mb-60">
                <div className="top-caption">
                  <h4>The Ceremony</h4>
                  <p>July 20, 2020</p>
                </div>
                <div className="services-img">
                  <img src="assets/img/service/service2.png" alt="" />
                  <div className="back-flower">
                    <img src="assets/img/service/services_flower1.png" alt="" />
                  </div>
                </div>
                <div className="bottom-caption">
                  <span>12:00PM-2:00PM</span>
                  <p>
                    The Sierra Resort 14
                    <br /> Pacific Grove Monterey, CA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singl-services text-center mb-60">
                <div className="top-caption">
                  <h4>Afterparty</h4>
                  <p>July 20, 2020</p>
                </div>
                <div className="services-img">
                  <img src="assets/img/service/service3.png" alt="" />
                  <div className="back-flower">
                    <img src="assets/img/service/services_flower1.png" alt="" />
                  </div>
                </div>
                <div className="bottom-caption">
                  <span>12:00PM-2:00PM</span>
                  <p>
                    The Sierra Resort 14
                    <br /> Pacific Grove Monterey, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form section-padding2 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="form-wrapper">
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="section-tittle tittle-form text-center">
                      <img
                        src="assets/img/memories/section_tittle_flowre.png"
                        alt=""
                      />
                      <h2>Are you attending?</h2>
                    </div>
                  </div>
                </div>
                <form id="contact-form" action="#" method="POST">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-box mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="Email"
                          name="subject"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="select-itms">
                        <select name="select" id="select2">
                          <option value="">1 Guest</option>
                          <option value="">2 Guest</option>
                          <option value="">3 Guest</option>
                          <option value="">4 Guest</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="submit-info">
                        <button className="btn2" type="submit">
                          R.S.V.P
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="shape-inner-flower">
                  <img
                    src="assets/img/flower/form-smoll-left.png"
                    className="top1"
                    alt=""
                  />
                  <img
                    src="assets/img/flower/form-smoll-right.png"
                    className="top2"
                    alt=""
                  />
                  <img
                    src="assets/img/flower/form-smoll-b-left.png"
                    className="top3"
                    alt=""
                  />
                  <img
                    src="assets/img/flower/form-smoll-b-right.png"
                    className="top4"
                    alt=""
                  />
                </div>

                <div className="shape-outer-flower">
                  <img
                    src="assets/img/flower/from-top.png"
                    className="outer-top"
                    alt=""
                  />
                  <img
                    src="assets/img/flower/from-bottom.png"
                    className="outer-bottom"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-sections">
        <div className="d-area">
          {/* <div
            id="map"
            style={{
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          ></div> */}
          {/* <script>
              function initMap() {
                  var uluru = {
                      lat: -25.363,
                      lng: 131.044
                  };
                  var grayStyles = [{
                          featureType: "all",
                          stylers: [{
                                  saturation: -90
                              },
                              {
                                  lightness: 50
                              }
                          ]
                      },
                      {
                          elementType: 'labels.text.fill',
                          stylers: [{
                              color: '#ccdee9'
                          }]
                      }
                  ];
                  var map = new google.maps.Map(document.getElementById('map'), {
                      center: {
                          lat: -31.197,
                          lng: 150.744
                      },
                      zoom: 9,
                      styles: grayStyles,
                      scrollwheel: false
                  });
              }
          </script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap">
          </script> */}
        </div>
      </section>

      <div className="brand-area section-padding2">
        <div className="container"></div>
      </div>
    </>
  );
};

export default Content;
