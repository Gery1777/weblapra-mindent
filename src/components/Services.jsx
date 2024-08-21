import React, { useState, useEffect, useRef } from "react";
import data from "../data.json";
import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <>
      <section className="services bg-primary" id="services">
        <div class="container">
          <div class="row mb-3 text-center justify-content-around">
            <h1>Csomagjaink</h1>
            <p>
              A neked megfelelő csomag alapján tudjuk elkezdeni a közös munkát*
              <br />
              Keress fel minket, ha szeretnél segítséget, melyik lenne számodra
              a legmegfelelőbb
            </p>
            <div class="services-table table-responsive-lg card mt-4 mb-4 col-12">
              <table class="table">
                <thead>
                  <tr>
                    {data.servicesTypes.map((type) => (
                      <th
                        scope="col"
                        style={{ width: type === "" ? "40%" : "20%" }}
                      >
                        {type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.services.map((row, index) => (
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
          <p className="small">
            *Csomagjaink tájékoztató jellegűek. Részletes tartalmakért kérlek
            keress fel minket.
          </p>
        </div>
      </section>
    </>
  );
}
export default Services;
