import React from "react";
import styles from "./Tags.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Tags = () => {
  return (
    <div className={styles.tags}>
      <div className={styles.name}>
        <FontAwesomeIcon className={styles.icon} icon={faTag} />
        <h1>Tags</h1>
      </div>
      <div className={styles.items}>
        <h4>Banana</h4>
        <h4>Fresh Milk</h4>
        <h4>Coconut</h4>
        <h4>Papaya</h4>
        <h4>Tea</h4>
        <h4>Samosa</h4>
        <h4>Meat</h4>
      </div>
    </div>
  );
};

export default Tags;
