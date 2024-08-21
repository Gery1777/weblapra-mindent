import React from "react";
import hero from "/images/hero-icon.png";

function Hero() {
  return (
    <>
      <header className="hero bg-primary" id="home">
        <div className="container position-relative">
          <div className="row justify-content-left">
            <div className="col-xl-12">
              <div className="text-left hstack">
                <div>
                  {/* <b style={{ color: "blue" }}>WEBLAPRA MINDENT</b> */}
                  {/* <!-- Page heading--> */}
                  <h1 className="mb-5">
                    Személyre szabott online jelenlét mindenkinek
                  </h1>
                  <a href="#contact">
                    <button className="btn btn-primary">Írj nekünk</button>
                  </a>
                </div>
                <img src={hero} style={{ width: "25%", height: "25%" }}></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
