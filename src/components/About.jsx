import React from "react";

import profilePicture from "/images/profilePicture.jpg";
import profilePicture2 from "/images/hero-bg.jpg";
function About() {
  return (
    <>
      <section className="about bg-secondary" id="about">
        <div className="container">
          <div className="row justify-content-around align-items-center mb-5">
            <div className="col-lg-5">
              <div className="about-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <h3>Célunk</h3>
                <p className="mt-4">
                  A{" "}
                  <span>
                    <b>Weblapra Mindent</b>
                  </span>{" "}
                  csapatánál hiszünk abban, hogy minden vállalkozás megérdemel
                  egy erős online jelenlétet. A mai digitális korban a weboldal
                  már nem luxus, hanem alapvetés. Célunk, hogy megfizethető és
                  elérhető legyen mindenki számára egy olyan professzionális
                  online identitás kialakítása, amely tükrözi márkájukat és
                  vonzza ügyfeleiket.
                </p>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                className="about-item-image rounded-circle mb-3"
                src={profilePicture}
              />
            </div>
          </div>
          <div className="row justify-content-around align-items-center flex-wrap-reverse mb-5 ">
            <div className="col-lg-5 text-center">
              <img
                className="about-item-image rounded-circle mb-3"
                src={profilePicture2}
              />
            </div>
            <div className="col-lg-5">
              <div className="about-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <h3>Miért mi?</h3>
                <p className="mt-4">
                  Ügyfeleink specifikus igényeire szabott, reszponzív weboldal
                  tervezési és fejlesztési szolgáltatásokat kínálunk. Csapatunk
                  segítségével könnyedén testreszabhatja weboldalát, anélkül,
                  hogy bármilyen technikai szakértelemre lenne szüksége.
                  Emellett folyamatos támogatást és karbantartást is
                  biztosítunk, hogy weboldala mindig naprakész és biztonságos
                  legyen.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-left">
            <div className="col-10">
              <h3>Minket keresel, ha...</h3>
              <p className="ms-5 mt-4">
                ... vállalkozásod elérte azt a szintent, ahol már nem elég a
                különböző közösségi médián való jelenlét
                <br /> <br />
                ... szeretnéd, hogy a lehető legtöbb potenciális ügyfél
                megismerhesse a kínálatodat
                <br /> <br />
                ... meglévő weblapodat szeretnéd átalakítnai/ újratervezni
                <br /> <br />
                ... egy segítőkész csapattal szeretnél együtt dolgozni
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
