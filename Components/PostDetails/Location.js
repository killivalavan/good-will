import React from "react";
import styles from "./Location.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h3>Location</h3>
        <div className={styles.landmark}>
          <p>
            <span>
              <FontAwesomeIcon icon={faDiamondTurnRight} />
            </span>{" "}
            Near water tank
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faDiamondTurnRight} />
            </span>{" "}
            Opposite to saloon
          </p>
        </div>
        <div className={styles.map}>
          <img src="/Images/map.png" alt="map" />
        </div>
        <button className={styles.directionsBtn}>Get direction</button>
      </div>
    </div>
  );
};

export default Location;
