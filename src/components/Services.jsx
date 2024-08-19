import React, { useState, useEffect, useRef } from "react";
import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesTypeData = ["", "Alap", "Profi", "Prémium"];
const ServicesData = [
  {
    feature: "Egyéni tartalom",
    isIncluded: [true, true, true],
  },
  {
    feature: "Design sablon alapján",
    isIncluded: [true, true, true],
  },
  {
    feature: "Egyedi design",
    isIncluded: [false, true, true],
  },
  {
    feature: "24/7 hibaelhárítás",
    isIncluded: [false, true, true],
  },
  {
    feature: "Weblap üzemeltetés",
    isIncluded: [false, false, true],
  },
];

function Services() {
  return (
    <>
      <section className="services bg-primary" id="services">
        <div class="container">
          <div class="row mb-3 text-center justify-content-around">
            <h1>Csomagjaink</h1>
            <div class="table-responsive-lg card mt-4 mb-4 box-shadow">
              <table class="table">
                <thead>
                  <tr>
                    {ServicesTypeData.map((type) => (
                      <th
                        scope="col"
                        style={{ width: type === "" ? "41%" : "20%" }}
                      >
                        {type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ServicesData.map((row, index) => (
                    <tr>
                      <th scope="row">{row.feature}</th>
                      {row.isIncluded.map((isInlcuded) => (
                        <td>
                          {isInlcuded ? (
                            <FontAwesomeIcon icon={faCheckSquare} />
                          ) : (
                            <FontAwesomeIcon icon={faXmarkSquare} />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
