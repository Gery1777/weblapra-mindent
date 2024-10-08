import React, { useState, useRef, useEffect } from "react";
import data from "../data.json";

function Showcase() {
  return (
    <>
      <section className="showcase bg-secondary text-left" id="showcase">
        <div className="container mb-4">
          <h1>Korábbi munkáink</h1>
          <p>
            Nézz körbe, korábban elkészített weblapjaink között
            <br />
            Szerezz inspirációt és nézd meg mások, milyen megjelenést
            választottak
          </p>
        </div>
        {/* <div className="showcase-item-container row justify-content-around"> */}
        <div className="showcase-item-container">
          {data.showcase.map((item, index) => (
            <div className="showcase-item-card rounded-4 m-2">
              <a href={item.URL}>
                <div className="content text-center vstack">
                  <img
                    src={item.img} //{item.img}
                    alt=""
                    className="content-image mb-2 rounded-4"
                  />
                  <b>{item.name}</b>
                  <hr />
                  <p style={{ fontSize: "0.8rem", width: "100%" }}>
                    {item.hashTags.map((hashTag) => hashTag + " ")}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Showcase;
