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
                  <b style={{ color: "blue" }}>WEBLAPRA MINDENT</b>
                  {/* <!-- Page heading--> */}
                  <h1 className="mb-5">
                    Személyre szabott online jelenlét pillanatok alatt
                  </h1>
                  <div className="hstack col-4 justify-content-left">
                    <a href="#contact">
                      <button className="btn btn-primary">Írj nekünk</button>
                    </a>
                  </div>
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
