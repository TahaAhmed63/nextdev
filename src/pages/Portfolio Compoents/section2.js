import React from "react";
import lady3 from "public/assets/HomeImages/Group (2).png";
const section2 = () => {
  return (
    <>
      <section className="talent-hub pt-5 mt-5">
        <div
          className="overlay-sec-2 d-flex align-items-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="container-fluid">
            <div className="container">
              <div className="row ">
                <div
                  className="col-md-6 col-sm-6 d-flex justify-content-center flex-column pb-5 MAIN-HEAD"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h5
                    className="sec-4-head w-80"
                    style={{
                      color: "#000",
                      fontFamily: "Gilroy",
                      fontSize: "48px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "61.5px",
                      width: "70%",
                    }}
                  >
                    Clients Get{" "}
                    <span
                      style={{
                        color: "#1EA7E0",
                        fontFamily: "Gilroy",
                        fontSize: "48px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "61.5px",
                      }}
                    >
                      Always Exceptional
                    </span>{" "}
                    <span
                      style={{
                        color: "#000",
                        fontFamily: "Gilroy",
                        fontSize: "48px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "61.5px",
                      }}
                    >
                      Works From me{" "}
                    </span>
                  </h5>
                  <p
                    className="mb-5"
                    style={{
                      color: "#505050",
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "28px",
                    }}
                  >
                    Our software development company consistently delivers
                    exceptional work that exceeds client expectations.
                  </p>
                  <ul className="mt-5">
                    <li
                      style={{
                        color: "#000",
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "25.5px",
                      }}
                    >
                      Top Quality Works
                    </li>
                    <li
                      style={{
                        color: "#000",
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "25.5px",
                      }}
                    >
                      Commitments
                    </li>
                    <li
                      style={{
                        color: "#000",
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "25.5px",
                      }}
                    >
                      24 Hours Active
                    </li>
                  </ul>
                </div>
                {/* <div className="col-md-6 col-sm-6">
        <Image  src={girl} className="img-fluid text-center " alt="asa"/>
         
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section2;
